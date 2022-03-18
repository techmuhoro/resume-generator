import React from 'react';
import { InfoHeader } from '../../index';

const HonorsInformation: React.FC = () => {
   const [isOpen, setIsOpen] = React.useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader title="Honors" toggleOpen={toggleOpen} isOpen={isOpen} />
         <>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>
               <p>Honors Information</p>
            </div>
         </>
      </div>
   );
};

export { HonorsInformation };
