import { FC, useContext, DetailedHTMLProps, HTMLAttributes } from 'react';
import { DataContext } from 'context/DataContext';
import { DataContextType } from '@/types/data';
import { format, formatDistanceStrict } from 'date-fns';

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
      workList,
   } = value;

   const refereesSection = () => {
      const refereeHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];
      if (refereesList.length > 0) {
         refereesList.forEach(item => {
            refereeHtmlList.push(
               <div className="w-1/2" key={item.id}>
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
               <div className="w-1/2" key={skill.id}>
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
               <div className="mb-1" key={project.id}>
                  <p className="font-bold">{project.name}</p>
                  <p className="text-gray-500 -mt-1 text-[14px] hover:underline">
                     {' '}
                     {project.url}
                  </p>
                  <p className="text-[15px]">{project.description}</p>
               </div>
            );
         });

         return projectsHtmlList;
      }
      return '';
   };

   const educationSection = () => {
      const educationHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];

      if (educationList.length > 0) {
         // some code
         educationList.forEach(item => {
            educationHtmlList.push(
               <div className="" key={item.id}>
                  <p className="">
                     <span className="capitalize font-semibold">
                        {item.level}
                     </span>
                     <span className="font-semibold"> in {item.title}</span>{' '}
                     <span className="text-sm"> - {item.grade}</span>
                     {/* <span className="capitalize">({item.level})</span> */}
                  </p>
                  <p className="flex">
                     <span>{item.school}</span>
                     <span className="ml-2 text-[14px]">
                        ({format(new Date(item.startDate), 'MMM-yyyy')} -{'  '}
                        {format(new Date(item.endDate), 'MMM-yyyy')})
                     </span>
                  </p>
               </div>
            );
         });
         return educationHtmlList;
      }

      return '';
   };

   const worksSection = () => {
      const worksHtmlList: DetailedHTMLProps<
         HTMLAttributes<HTMLDivElement>,
         HTMLDivElement
      >[] = [];

      if (projectsList.length > 0) {
         // some code
         workList.forEach(item => {
            worksHtmlList.push(
               <div className="mb-1.5" key={item.id}>
                  <p className="flex">
                     <span className="font-bold">{item.company}</span>
                     <span className="ml-auto">
                        {format(new Date(item.startDate), 'MMM-yy')} -{' '}
                        {item.endDate
                           ? format(new Date(item.endDate), 'MMM-yy')
                           : 'present'}{' '}
                        {item.endDate && (
                           <>
                              (
                              {formatDistanceStrict(
                                 new Date(item.startDate),
                                 new Date(item.endDate)
                              )}
                              )
                           </>
                        )}
                     </span>
                  </p>
                  <p className="text-gray-600 text-[14px] -mt-1">
                     {item.postion}
                  </p>
                  <p className="text-[15.2px]">{item.description}</p>
               </div>
            );
         });
         return worksHtmlList;
      }

      return '';
   };

   return (
      <div
         id="pdf"
         className="w-[95%] bg-white mt-5 rounded-sm min-h-[842px] flex items-stretch mb-10"
      >
         <div className="bg-[#1f5177] w-[25%] text-white">
            <div className="w-32 h-32 bg-red-400 rounded-full mx-auto mt-5">
               <img
                  src="https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBtYW58ZW58MHx8MHx8&w=1000&q=80"
                  alt="user"
                  className="rounded-full w-full h-full"
               />
            </div>
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
         <div className="w-[75%] px-4 pt-5">
            {objective.length > 0 && (
               <div className={'mb-3'}>
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Objective
                  </p>
                  <p>{objective}</p>
               </div>
            )}
            {educationList.length > 0 && (
               <div className="mb-2">
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Eduction
                  </p>
                  {educationSection()}
               </div>
            )}
            {workList.length > 0 && (
               <div className="mb-2">
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Work History
                  </p>
                  {worksSection()}
               </div>
            )}
            {projectsList.length > 0 && (
               <div className="mb-3">
                  <p className="uppercase font-bold text-blue-400 pb-0.5 border-b-2 border-blue-400">
                     Projects
                  </p>
                  <div className="mt-2">{projectsSection()}</div>
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
               <div className="mb-4">
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
