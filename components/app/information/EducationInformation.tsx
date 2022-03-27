import React from 'react';
import { InfoHeader } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faInfoCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Education, DataContextType } from '@/types/data';
import { v4 as uuid } from 'uuid';
import { DataContext } from 'context/DataContext';

const EducationInformation: React.FC = () => {
   const { educationList, setEducationList, syncStorage } = React.useContext(
      DataContext
   ) as DataContextType;

   const [isOpen, setIsOpen] = React.useState(false);
   const [showAddForm, setShowAddForm] = React.useState(false);
   const [editMode, setEditMode] = React.useState(false);
   const [editedItemId, setEditedItemId] = React.useState('');

   //inputs
   const [title, setTitle] = React.useState('');
   const [level, setLevel] = React.useState('');
   const [school, setSchool] = React.useState('');
   const [grade, setGrade] = React.useState('');
   const [startDate, setStartDate] = React.useState('');
   const [endDate, setEndDate] = React.useState('');

   // for updating the local storage
   React.useEffect(() => {
      // update the local storage when the education list changes
      syncStorage();
   }, [educationList]);

   const toggleOpen = () => setIsOpen(!isOpen);
   const openForm = () => setShowAddForm(true);
   const closeForm = () => setShowAddForm(false);

   const clearFields = () => {
      setTitle('');
      setLevel('');
      setSchool('');
      setGrade('');
      setStartDate('');
      setEndDate('');
   };

   const hardReset = () => {
      clearFields();
      setEditMode(false);
      setEditedItemId('');
      closeForm();
   };

   const saveEducation = () => {
      const condition =
         title.trim().length > 0 &&
         level.trim().length > 0 &&
         school.trim().length > 0 &&
         grade.trim().length > 0;

      if (condition) {
         const newEducation: Education = {
            id: uuid().slice(0, 8),
            title: title.trim(),
            level: level.trim(),
            school: school.trim(),
            grade: grade.trim(),
            startDate: startDate.trim(),
            endDate: endDate.trim(),
         };

         setEducationList([...educationList, newEducation]);
         clearFields();
      }

      closeForm();
   };

   const deleteEducation = (id: string) => {
      const newList = educationList.filter(item => item.id !== id);
      setEducationList(newList);
   };

   const editEducation = (id: string) => {
      const selecteEducation = educationList.find(item => item.id === id);

      if (selecteEducation) {
         // populate the fields
         setTitle(selecteEducation.title);
         setLevel(selecteEducation.level);
         setSchool(selecteEducation.school);
         setGrade(selecteEducation.grade);
         setStartDate(selecteEducation.startDate);
         setEndDate(selecteEducation.endDate);

         // set edit Mode on
         setEditMode(true);
         setEditedItemId(selecteEducation.id);

         // open form
         openForm();
      }
   };
   const saveEditedEducation = () => {
      const newList: Education[] = [...educationList];

      newList.forEach(item => {
         if (item.id === editedItemId) {
            item.title = title;
            item.level = level;
            item.school = school;
            item.grade = grade;
            item.startDate = startDate;
            item.endDate = endDate;
         }
      });

      setEducationList(newList);

      hardReset();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader
            title="Education"
            toggleOpen={toggleOpen}
            isOpen={isOpen}
         />

         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
               {educationList.map(item => (
                  <div className="bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                     <div>
                        <p>{item.title}</p>
                     </div>
                     <div className="ml-auto flex ">
                        <button onClick={() => deleteEducation(item.id)}>
                           <FontAwesomeIcon
                              icon={faMinusCircle}
                              className="mr-2 "
                           />
                        </button>
                        <button onClick={() => editEducation(item.id)}>
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
               {/**Form */}
               <div className="mb-2">
                  <label htmlFor="title">Title</label>
                  <br />
                  <input
                     type="text"
                     id="title"
                     className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
               </div>
               <div className="mb-2">
                  <label htmlFor="level">Level</label>
                  <br />
                  <select
                     id="level"
                     className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                     value={level}
                     onChange={e => setLevel(e.target.value)}
                  >
                     <option value="">Select Level</option>
                     <option value="phd">PHD</option>
                     <option value="master">Masters</option>
                     <option value="degree">Degree</option>
                     <option value="diploma">Diploma</option>
                     <option value="certificate">Certificate</option>
                  </select>
               </div>

               <div className="mb-2">
                  <label htmlFor="school">School</label>
                  <input
                     type="text"
                     id="school"
                     className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                     value={school}
                     onChange={e => setSchool(e.target.value)}
                  />
               </div>
               <div className="mb-2">
                  <label htmlFor="grade">Grade</label>
                  <input
                     type="text"
                     id="grade"
                     className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                     value={grade}
                     onChange={e => setGrade(e.target.value)}
                  />
               </div>

               <div className="flex gap-x-2">
                  <div className="w-1/2">
                     <label htmlFor="start-date">Start date</label>
                     <input
                        type={'date'}
                        id-="start-date"
                        className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                     />
                  </div>
                  <div className="w-1/2">
                     <label htmlFor="end-date">End date</label>
                     <br />
                     <input
                        type={'date'}
                        id="end-date"
                        className="w-full bg-gray-200 py-1 px-2 rounded-[5px]"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                     />
                     <p className="text-sm text-gray-500">
                        <FontAwesomeIcon
                           icon={faInfoCircle}
                           className={'text-[13px] mr-2'}
                        />
                        <span>Leave empty if ongoing</span>
                     </p>
                  </div>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <button
                  onClick={
                     showAddForm
                        ? editMode
                           ? saveEditedEducation
                           : saveEducation
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
                           className="text-purple-400 mr-2"
                           icon={faPlusCircle}
                        />
                        <span>Add</span>
                     </>
                  )}
               </button>
               {showAddForm && (
                  <p
                     onClick={hardReset}
                     className="text-blue-500 ml-2 cursor-pointer"
                  >
                     Cancel
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};

export { EducationInformation };
