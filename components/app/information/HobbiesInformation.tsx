import React from 'react';
import { InfoHeader } from '../../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from 'context/DataContext';
import { DataContextType } from '../../../@types/data';

const HobbiesInformation: React.FC = () => {
   const value = React.useContext(DataContext);
   const { hobbiesList, setHobbiesList } = value as DataContextType;

   const [isOpen, setIsOpen] = React.useState(false);
   const [hobby, setHobby] = React.useState<string>('');

   const toggleOpen = () => setIsOpen(!isOpen);

   const saveHobby = () => {
      if (hobby.length > 1) {
         const newHobbiesList: string[] = hobbiesList.slice(0);
         newHobbiesList.push(hobby);

         setHobbiesList(newHobbiesList);
      }
      setHobby(''); // reset the hobby input
   };

   const removeHobby = (hobby: string) => {
      //clean up
      hobby = hobby.trim();

      let newHobbiesList: string[] = hobbiesList.slice(0);

      newHobbiesList = newHobbiesList.filter(h => h !== hobby);

      setHobbiesList(newHobbiesList);
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader title="Hobbies" isOpen={isOpen} toggleOpen={toggleOpen} />

         <>
            <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
               <div className={'mb-4 flex gap-y-3 gap-x-[3.5%] flex-wrap'}>
                  {hobbiesList.map(hobby => (
                     <div className="bg-gray-300 w-[48%] flex items-center py-2 px-3 rounded-[4px]">
                        <p>{hobby}</p>
                        <button
                           onClick={() => removeHobby(hobby)}
                           className="ml-auto "
                        >
                           <FontAwesomeIcon icon={faMinusCircle} />
                        </button>
                     </div>
                  ))}
               </div>
               <div className={' flex justify-center'}>
                  <input
                     type="text"
                     className="bg-gray-200 w-1/2 mr-3 py-1.5 rounded-md px-2 dark:text-black"
                     placeholder="i.e swimming"
                     value={hobby}
                     onChange={e => {
                        setHobby(e.target.value);
                     }}
                     onKeyPress={e => {
                        if (e.key === 'Enter') {
                           saveHobby();
                        }
                     }}
                  />
                  <button onClick={saveHobby}>
                     <FontAwesomeIcon
                        icon={faPlusCircle}
                        className="text-purple-500 text-3xl"
                     />
                  </button>
               </div>
            </div>
         </>
      </div>
   );
};

export { HobbiesInformation };
