import React from 'react';
import { InfoHeader } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Work, DataContextType } from '@/types/data';
import { DataContext } from 'context/DataContext';
import { v4 as uuid } from 'uuid';

const WorkInformation: React.FC = () => {
   const { workList, setWorkList } = React.useContext(
      DataContext
   ) as DataContextType;

   const [isOpen, setIsOpen] = React.useState(false);
   const [showAddForm, setShowAddForm] = React.useState(false);
   const [editMode, setEditMode] = React.useState(false);
   const [editedWorkId, setEditedWorkId] = React.useState('');
   const [companyName, setCompanyName] = React.useState('');
   const [position, setPosition] = React.useState('');
   const [startDate, setStartDate] = React.useState('');
   const [endDate, setEndDate] = React.useState('');

   const toggleOpen = () => setIsOpen(!isOpen);
   const openForm = () => setShowAddForm(true);
   const closeForm = () => setShowAddForm(false);

   const clearFields = () => {
      setCompanyName('');
      setPosition('');
      setStartDate('');
      setEndDate('');
   };

   const hardReset = () => {
      clearFields();
      closeForm();
      setEditMode(false);
      setEditedWorkId('');
   };

   const saveWork = () => {
      const condition =
         companyName.trim().length > 0 && position.trim().length > 0;

      if (condition) {
         const newWork: Work = {
            id: uuid().slice(0, 8),
            company: companyName.trim(),
            postion: position.trim(),
            startDate: startDate.trim(),
            endDate: endDate.trim(),
         };

         setWorkList([...workList, newWork]);

         clearFields();
      }

      closeForm();
   };
   const removeWork = (id: string) => {
      const newList = workList.filter(item => item.id !== id);

      setWorkList(newList);
   };

   const editWork = (id: string) => {
      const selectedWork = workList.find(work => work.id === id);
      if (selectedWork) {
         // populate the fields
         setCompanyName(selectedWork.company);
         setPosition(selectedWork.postion);
         setStartDate(selectedWork.startDate);
         setEndDate(selectedWork.endDate);
         setEditedWorkId(selectedWork.id.trim());

         // edit mode
         setEditMode(true);
         openForm();
      }
   };
   const saveEditedWork = () => {
      const condition =
         companyName.trim().length > 0 && position.trim().length > 0;
      if (condition) {
         const newList = workList.map(work => {
            if (work.id === editedWorkId) {
               work.company = companyName.trim();
               work.postion = position.trim();
               work.startDate = startDate.trim();
               work.endDate = endDate.trim();
            }

            return work;
         });

         setWorkList(newList);
      }

      hardReset();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader
            toggleOpen={toggleOpen}
            isOpen={isOpen}
            title="Work Experience"
         />
         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
               {workList.map(work => (
                  <div className="bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                     <div>
                        <p>{work.company}</p>
                     </div>
                     <div className="ml-auto flex ">
                        <button onClick={() => removeWork(work.id)}>
                           <FontAwesomeIcon
                              icon={faMinusCircle}
                              className="mr-2 "
                           />
                        </button>
                        <button onClick={() => editWork(work.id)}>
                           <FontAwesomeIcon
                              icon={faEdit}
                              className="text-green-500"
                           />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
            <div className={`mb-5 ${showAddForm ? 'block' : 'hidden'}`}>
               <div className="mb-2">
                  <label htmlFor="company">Company/Organization</label>
                  <br />
                  <input
                     type="text"
                     id="company"
                     className="w-full bg-gray-200 py-1.5 px-2 rounded-[5px]"
                     value={companyName}
                     onChange={e => setCompanyName(e.target.value)}
                  />
               </div>
               <div className="mb-2">
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                     type="text"
                     id="position"
                     className="w-full bg-gray-200 py-1.5 px-2 rounded-[5px]"
                     value={position}
                     onChange={e => setPosition(e.target.value)}
                  />
               </div>
               <div className="flex gap-x-2">
                  <div className="w-1/2">
                     <label htmlFor="start-date">Start Date</label>
                     <br />
                     <input
                        type={'date'}
                        id="start-date"
                        className="w-full bg-gray-200 py-1.5 px-2 rounded-[5px]"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                     />
                  </div>
                  <div className="w-1/2">
                     <label htmlFor="end-date">
                        <span>End date </span>
                        <span className="text-green-400 text-[14px]">
                           (remove empty if ongoing)
                        </span>
                     </label>
                     <br />
                     <input
                        type={'date'}
                        id="end-date"
                        className="w-full bg-gray-200 py-1.5 px-2 rounded-[5px]"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                     />
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center">
               {/**Button */}
               <button
                  onClick={
                     showAddForm
                        ? editMode
                           ? saveEditedWork
                           : saveWork
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

export { WorkInformation };
