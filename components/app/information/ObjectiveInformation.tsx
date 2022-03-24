import React from 'react';
import { InfoHeader } from '../../';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DataContextType } from '@/types/data';
import { DataContext } from 'context/DataContext';

const ObjectiveInformation: React.FC = () => {
   const { objective, setObjective } = React.useContext(
      DataContext
   ) as DataContextType;

   const [isOpen, setIsOpen] = React.useState(false);
   // const [objective, setObjective] = React.useState('');

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader
            title="Objective"
            isOpen={isOpen}
            toggleOpen={toggleOpen}
         />
         <>
            <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
               <div>
                  <textarea
                     name=""
                     id=""
                     cols={30}
                     rows={5}
                     className="bg-gray-200 rounded-md w-full p-2 text-lg"
                     placeholder="Objective"
                     onChange={e => setObjective(e.target.value)}
                  ></textarea>
               </div>
            </div>
         </>
         {/* {isOpen && (
            <div>
               <p>This is Objective Information</p>
               <FontAwesomeIcon icon={faCoffee} spin />
            </div>
         )} */}
      </div>
   );
};

export { ObjectiveInformation };
