import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Referee, DataContextType } from '@/types/data';
import { InfoHeader } from 'components';
import { v4 as uuid } from 'uuid';
import { DataContext } from 'context/DataContext';

const RefereesInformation: React.FC = () => {
   const value = React.useContext(DataContext) as DataContextType;
   const { refereesList, setRefereesList, syncStorage } = value;

   const [isOpen, setIsOpen] = React.useState(false);
   const [showAddForm, setShowAddForm] = React.useState(false);
   const [editMode, setEditMode] = React.useState(false);
   const [editedReferreId, setEditedRefereeId] = React.useState('');
   // const [refereesList, setRefereesList] = React.useState<Referee[]>([]);
   const [refereeName, setRefereeName] = React.useState('');
   const [refereeTitle, setRefereeTitle] = React.useState('');
   const [refereeMobile, setRefereeMobile] = React.useState('');
   const [refereeEmail, setRefereeEmail] = React.useState('');

   // refs
   const titleRef = React.useRef<HTMLInputElement | null>(null);
   const mobileRef = React.useRef<HTMLInputElement | null>(null);
   const emailRef = React.useRef<HTMLInputElement | null>(null);

   React.useEffect(() => {
      // update local storage with an new copy of referee's list
      syncStorage();
   }, [refereesList]);

   const toggleOpen = () => setIsOpen(!isOpen);
   const openForm = () => setShowAddForm(true);
   const closeForm = () => setShowAddForm(false);

   const clearFields = () => {
      setRefereeName('');
      setRefereeTitle('');
      setRefereeMobile('');
      setRefereeEmail('');
   };

   const hardReset = () => {
      clearFields();
      closeForm();
      setEditMode(false);
      setEditedRefereeId('');
   };

   const saveReferee = () => {
      const condition =
         refereeName.trim().length > 1 &&
         refereeTitle.trim().length > 1 &&
         refereeMobile.trim().length > 1 &&
         refereeEmail.trim().length > 1;

      if (condition) {
         const newReferee: Referee = {
            id: uuid().slice(0, 8),
            name: refereeName.trim(),
            title: refereeTitle.trim(),
            mobileNumber: refereeMobile.trim(),
            email: refereeEmail.trim(),
         };

         setRefereesList([...refereesList, newReferee]);

         hardReset();
         //  clearFields();
         //  setShowAddForm(false);
         //  closeForm();
      }
   };

   const removeReferee = (id: string) => {
      const newList = refereesList.filter(referee => referee.id !== id);
      setRefereesList(newList);
   };

   const editReferee = (id: string) => {
      const selectedReferee = refereesList.find(referee => referee.id === id);
      if (selectedReferee) {
         // populate the fields
         setRefereeName(selectedReferee.name);
         setRefereeTitle(selectedReferee.title);
         setRefereeMobile(selectedReferee.mobileNumber);
         setRefereeEmail(selectedReferee.email);

         openForm();
         setEditMode(true);
         setEditedRefereeId(selectedReferee.id);
      }
   };

   const savedEditedReferee = () => {
      const newList = refereesList.map(referee => {
         if (referee.id === editedReferreId) {
            referee.name = refereeName;
            referee.title = refereeTitle;
            referee.mobileNumber = refereeMobile;
            referee.email = refereeEmail;
         }

         return referee;
      });

      setRefereesList(newList);

      hardReset();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader title="Referees" toggleOpen={toggleOpen} isOpen={isOpen} />

         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
               {/** referees list */}
               {refereesList.map(referee => (
                  <div className="bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                     <div>
                        <p>{referee.name}</p>
                     </div>
                     <div className="ml-auto flex">
                        <button onClick={() => removeReferee(referee.id)}>
                           <FontAwesomeIcon
                              icon={faMinusCircle}
                              className="mr-2 "
                           />
                        </button>
                        <button onClick={() => editReferee(referee.id)}>
                           <FontAwesomeIcon
                              icon={faEdit}
                              className="text-green-500"
                           />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
            <div className={`${showAddForm ? 'block' : 'hidden'}`}>
               {/** form */}
               <div className="flex gap-x-4 mb-4">
                  <div className="w-1/2">
                     <label htmlFor="ref-name">Name</label>
                     <br />
                     <input
                        className="w-full bg-gray-100 py-1 px-2 rounded-[5px]"
                        type={'text'}
                        id="ref-name"
                        value={refereeName}
                        onChange={e => setRefereeName(e.target.value)}
                        onKeyUp={e => {
                           if (e.key === 'Enter') {
                              titleRef.current?.focus();
                           }
                        }}
                     />
                  </div>
                  <div className="w-1/2">
                     <label htmlFor="ref-title">Title</label>
                     <br />
                     <input
                        ref={titleRef}
                        className="w-full bg-gray-100 py-1 px-2 rounded-[5px]"
                        type={'text'}
                        id="ref-title"
                        value={refereeTitle}
                        onChange={e => setRefereeTitle(e.target.value)}
                        onKeyUp={e => {
                           if (e.key === 'Enter') {
                              mobileRef.current?.focus();
                           }
                        }}
                     />
                  </div>
               </div>
               <div className="flex gap-x-4 mb-4">
                  <div className="w-1/2">
                     <label htmlFor="ref-mobile">Mobile Number</label>
                     <br />
                     <input
                        ref={mobileRef}
                        className="w-full bg-gray-100 py-1 px-2 rounded-[5px]"
                        type={'text'}
                        id="ref-mobile"
                        value={refereeMobile}
                        onChange={e => setRefereeMobile(e.target.value)}
                        onKeyUp={e => {
                           if (e.key === 'Enter') {
                              emailRef.current?.focus();
                           }
                        }}
                     />
                  </div>
                  <div className="w-1/2">
                     <label htmlFor="ref-email">Email address</label>
                     <br />
                     <input
                        ref={emailRef}
                        className="w-full bg-gray-100 py-1 px-2 rounded-[5px]"
                        type={'email'}
                        id="ref-email"
                        value={refereeEmail}
                        onChange={e => setRefereeEmail(e.target.value)}
                        onKeyUp={e => {
                           if (e.key === 'Enter') {
                              editMode ? savedEditedReferee() : saveReferee();
                           }
                        }}
                     />
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center">
               {/** button */}
               <button
                  onClick={
                     showAddForm
                        ? editMode
                           ? savedEditedReferee
                           : saveReferee
                        : openForm
                  }
                  className="border border-gray-400 rounded-[4px] w-1/4 py-1"
               >
                  {showAddForm ? (
                     editMode ? (
                        'Edit'
                     ) : (
                        'Save'
                     )
                  ) : (
                     <>
                        <FontAwesomeIcon
                           icon={faPlusCircle}
                           className="text-purple-400 mr-2"
                        />
                        <span>Add</span>
                     </>
                  )}
               </button>
            </div>
         </div>
      </div>
   );
};

export { RefereesInformation };
