import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChevronRight,
   faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
   title: string;
   isOpen: boolean;
   toggleOpen: () => void;
};
const InfoHeader: React.FC<Props> = ({ title, isOpen, toggleOpen }) => {
   return (
      <div
         onClick={toggleOpen}
         className={`flex cursor-pointer px-4 py-4  ${isOpen && 'mb-4'}`}
      >
         <p className="w-8 border border-transparent">
            {isOpen ? (
               <FontAwesomeIcon icon={faChevronDown} />
            ) : (
               <FontAwesomeIcon icon={faChevronRight} />
            )}
         </p>
         <p>{title}</p>
      </div>
   );
};

export { InfoHeader };
