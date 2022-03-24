import React from 'react';
import { InfoHeader } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Skill, DataContextType } from '@/types/data';
import { v4 as uuid } from 'uuid';
import { DataContext } from 'context/DataContext';

const SkillsInformation: React.FC = () => {
   const { skillsList, setSkillsList } = React.useContext(
      DataContext
   ) as DataContextType;

   const [isOpen, setIsOpen] = React.useState(false);
   // const [skillsList, setSkillsList] = React.useState<Skill[]>([]);
   const [showAddForm, setShowAddForm] = React.useState(false);
   const [skill, setSkill] = React.useState('');
   const [level, setLevel] = React.useState('');
   const [editMode, setEditMode] = React.useState(false);
   const [editedSkillId, setEditedSkillId] = React.useState('');

   const levelRef = React.useRef<HTMLInputElement | null>(null);

   // helper functions
   const toggleOpen = () => setIsOpen(!isOpen);
   const openForm = () => setShowAddForm(true);
   const closeForm = () => setShowAddForm(false);
   const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSkill(e.target.value);
   const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setLevel(e.target.value);

   const clearFields = () => {
      setSkill('');
      setLevel('');
   };

   const resetAll = () => {
      clearFields();
      closeForm();
      setEditMode(false);
      setEditedSkillId('');
   };
   const saveSkill = () => {
      if (skill.trim().length > 1) {
         const newSkill: Skill = {
            id: uuid().slice(0, 8),
            name: skill.trim(),
            level: level.trim(),
         };
         setSkillsList([...skillsList, newSkill]);
      }
      resetAll();
   };

   const removeSkill = (id: string) => {
      const newList = skillsList.filter(skill => skill.id !== id);
      setSkillsList(newList);
   };

   const editSkill = (id: string) => {
      const currentSkill = skillsList.find(skill => skill.id === id);
      if (currentSkill) {
         setEditMode(true);
         setEditedSkillId(currentSkill.id);

         // populate the fields
         setSkill(currentSkill.name);
         setLevel(currentSkill.level);

         //  show the form
         openForm();
      }
   };
   const saveEditedSkill = () => {
      const newSkillsList = skillsList.map(mySkill => {
         if (mySkill.id === editedSkillId) {
            mySkill.name = skill;
            mySkill.level = level;
         }

         return mySkill;
      });

      setSkillsList(newSkillsList);

      resetAll();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader title="Skills" isOpen={isOpen} toggleOpen={toggleOpen} />
         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
               {/** list of skills */}
               {skillsList.map(skill => (
                  <div className=" bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                     <div className=" w-[80%]">
                        <p className="truncate">{skill.name}</p>
                     </div>
                     <div className="ml-auto flex ">
                        <button onClick={() => removeSkill(skill.id)}>
                           <FontAwesomeIcon
                              icon={faMinusCircle}
                              className="mr-2 "
                           />
                        </button>
                        <button onClick={() => editSkill(skill.id)}>
                           <FontAwesomeIcon
                              icon={faEdit}
                              className="text-green-500"
                           />
                        </button>
                     </div>
                  </div>
               ))}
            </div>
            <div className={`mb-4 ${showAddForm ? 'block' : 'hidden'}`}>
               {/**new skill form */}
               <div className="mb-2">
                  <label htmlFor="skill">Skill</label>
                  <br />
                  <input
                     className="bg-gray-100 py-1 px-2 rounded-[5px] w-full"
                     type="text"
                     id="skill"
                     placeholder="i.e Node.js"
                     value={skill}
                     onChange={handleSkillChange}
                     onKeyUp={e => {
                        if (e.key === 'Enter') {
                           levelRef.current?.focus();
                        }
                     }}
                  />
               </div>
               <div>
                  <label htmlFor="level">Level</label>
                  <br />
                  <input
                     ref={levelRef}
                     className="bg-gray-100 py-1 px-2 rounded-[5px] w-full"
                     type={'text'}
                     id="level"
                     placeholder="i.e beginner, intermediate, advanced etc."
                     value={level}
                     onChange={handleLevelChange}
                     onKeyUp={e => {
                        if (e.key === 'Enter') {
                           editMode ? saveEditedSkill() : saveSkill();
                        }
                     }}
                  />
               </div>
            </div>
            <div className="flex justify-center items-center">
               {/**button */}
               <button
                  onClick={
                     showAddForm
                        ? editMode
                           ? saveEditedSkill
                           : saveSkill
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
                           className={'text-purple-400 mr-2'}
                        />
                        <span>Add</span>
                     </>
                  )}
               </button>
               {showAddForm && (
                  <p
                     onClick={resetAll}
                     className="text-blue-600 ml-2 cursor-pointer"
                  >
                     Cancel
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};

export { SkillsInformation };
