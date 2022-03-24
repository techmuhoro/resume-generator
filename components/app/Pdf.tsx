import { FC, useContext, DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataContext } from 'context/DataContext';
import { DataContextType } from '@/types/data';
import { format } from 'date-fns';

const Pdf: FC = () => {
   const value = useContext(DataContext) as DataContextType;
   const {
      objective,
      fname,
      lname,
      email,
      mobile,
      title,
      website,
      hobbiesList,
      projectsList,
      educationList,
      refereesList,
      skillsList,
   } = value;

   const refereesSection = () => {
      const refereeHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];
      if (refereesList.length > 0) {
         refereesList.forEach(item => {
            refereeHtmlList.push(
               <div className="w-1/2">
                  <p className="font-bold -mb-1">{item.name}</p>
                  <p>{item.title}</p>
                  <p className="text-sm">
                     <a
                        className="text-[13px]"
                        href={`tel:${item.mobileNumber}`}
                     >
                        {item.mobileNumber}
                     </a>{' '}
                     / <a href={`mailto:${item.email}`}>{item.email}</a>
                  </p>
               </div>
            );
         });
         return refereeHtmlList;
      }
      return '';
   };

   const skillsSection = () => {
      const skillHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];

      if (skillsList.length > 0) {
         skillsList.forEach(skill => {
            skillHtmlList.push(
               <div className="w-1/2">
                  <p className="-mb-1">{skill.name}</p>
                  <p className="text-gray-400 text-[14px]">{skill.level}</p>
               </div>
            );
         });

         return skillHtmlList;
      }

      return '';
   };

   const projectsSection = () => {
      const projectsHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];

      if (projectsList.length > 0) {
         projectsList.forEach(project => {
            projectsHtmlList.push(
               <div>
                  <p>{project.name}</p>
                  <p>{project.url}</p>
                  <p>{project.description}</p>
               </div>
            );
         });

         return projectsHtmlList;
      }
      return '';
   };

   return (
      <div
         id="pdf"
         className="w-[95%] bg-white mt-5 rounded-sm min-h-screen flex items-stretch"
      >
         <div className="bg-[#1f5177] w-[25%] text-white">
            <div>
               <p className="text-center text-2xl font-bold mt-2">
                  {fname} {lname}
               </p>
               <p
                  className={
                     'text-center text-gray-100 mt-[-2px] uppercase text-sm'
                  }
               >
                  {title}
               </p>
            </div>
         </div>
         <div className="w-[75%] px-3 pt-5">
            {objective.length > 0 && (
               <div className={'mb-3'}>
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Objective
                  </p>
                  <p>{objective}</p>
               </div>
            )}
            {educationList.length > 0 && (
               <div>
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Eduction
                  </p>
                  {educationList.map(item => (
                     <div>
                        <p className="">
                           <span className="capitalize font-semibold">
                              {item.level}
                           </span>
                           <span className="font-semibold">
                              {' '}
                              in {item.title}
                           </span>{' '}
                           <span className="text-sm"> - {item.grade}</span>
                           {/* <span className="capitalize">({item.level})</span> */}
                        </p>
                        <p className="flex">
                           <span>{item.school}</span>
                           <span className="ml-2">
                              ({format(new Date(item.startDate), 'MMM-yyyy')} -
                              {'  '}
                              {format(new Date(item.endDate), 'MMM-yyyy')})
                           </span>
                        </p>
                     </div>
                  ))}
               </div>
            )}
            {projectsList.length > 0 && (
               <div className="mb-3">
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Projects
                  </p>
               </div>
            )}
            {skillsList.length > 0 && (
               <div className="mb-3">
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Skills
                  </p>
                  <div className="flex flex-wrap gap-y-2">
                     {skillsSection()}
                  </div>
               </div>
            )}
            {refereesList.length > 0 && (
               <div>
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Refereess
                  </p>
                  <div className="flex flex-wrap gap-y-2">
                     {refereesSection()}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export { Pdf };
