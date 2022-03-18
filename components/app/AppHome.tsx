import { FC, useState, useEffect } from 'react';
import { PreviousResumeCard, NewResumeBtn } from '../index';
import { NewResumeModal } from '../index';
import useLocalStrogae from '../../hooks/useLocalStorage';

export const AppHome: FC = () => {
   const [showNewResumeModal, setShowNewResumeModal] = useState(false);
   const [resumes, setResumes] = useState<any[]>([]);

   useEffect(() => {
      const { items, removeItem } = useLocalStrogae('resume');
      setResumes(items);
   }, [showNewResumeModal]);

   const closeNewResumeModal = () => {
      setShowNewResumeModal(false);
   };

   const openNewResumeModal = () => {
      setShowNewResumeModal(true);
   };

   return (
      <div>
         <div className="w-[90%] mx-auto mt-5">
            <div className="flex items-center gap-5 flex-wrap">
               {resumes.map(resume => (
                  <PreviousResumeCard
                     key={resume.id}
                     removeItem={(id: string) => {
                        console.log('hello');
                     }}
                     resume={resume}
                  />
               ))}

               <NewResumeBtn openNewResumeModal={openNewResumeModal} />
            </div>
            {showNewResumeModal && (
               <NewResumeModal closeNewResumeModal={closeNewResumeModal} />
            )}
         </div>
      </div>
   );
};
