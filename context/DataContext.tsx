import React, { createContext, FC, useState, useEffect } from 'react';
import {
   Project,
   Referee,
   Education,
   Skill,
   Work,
   SocialMedia,
   LocalStorageData,
} from '@/types/data';
import { useRouter } from 'next/router';

const DataContext = createContext<any>({});

const DataProvider: FC = ({ children }) => {
   const router = useRouter();
   let { id: resumeId } = router.query;

   const [objective, setObjective] = React.useState('');
   const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [title, setTitle] = useState('');
   const [website, setWebsite] = useState('');

   const [hobbiesList, setHobbiesList] = useState<string[]>([]);
   const [projectsList, setProjectList] = React.useState<Project[]>([]);
   const [refereesList, setRefereesList] = React.useState<Referee[]>([]);
   const [educationList, setEducationList] = React.useState<Education[]>([]);
   const [skillsList, setSkillsList] = React.useState<Skill[]>([]);
   const [workList, setWorkList] = React.useState<Work[]>([]);
   const [socialList, setSocialList] = React.useState<SocialMedia[]>([]);

   useEffect(() => {
      if (resumeId) {
         Array.isArray(resumeId) && (resumeId = resumeId[0]);
         console.log('beer1');
         const stringData = window.localStorage.getItem(resumeId);
         console.log('beer2');
         if (stringData) {
            const data = JSON.parse(stringData) as LocalStorageData;
            console.log('Called ->');
            console.log(data);
            // populate the data
            setObjective(data.objective);
            setFname(data.fname);
            setLname(data.lname);
            setEmail(data.email);
            setMobile(data.mobile);
            setTitle(data.title);
            setWebsite(data.website);

            setHobbiesList(data.hobbiesList);
            setProjectList(data.projectsList);
            setRefereesList(data.refereesList);
            setEducationList(data.educationList);
            setSkillsList(data.skillsList);
            setWorkList(data.workList);
            setSocialList(data.socialList);
         }
      }
   }, [resumeId]);

   const syncStorage = () => {
      const data = {
         objective,
         fname,
         lname,
         email,
         mobile,
         title,
         website,
         hobbiesList,
         projectsList,
         refereesList,
         educationList,
         skillsList,
         workList,
         socialList,
      };

      const stringData = JSON.stringify(data);

      if (resumeId) {
         Array.isArray(resumeId) && (resumeId = resumeId[0]);
         window.localStorage.setItem(resumeId, stringData);
      }
   };

   const value = {
      objective,
      setObjective,
      fname,
      setFname,
      lname,
      setLname,
      email,
      setEmail,
      mobile,
      setMobile,
      title,
      setTitle,
      website,
      setWebsite,
      hobbiesList,
      setHobbiesList,
      projectsList,
      setProjectList,
      refereesList,
      setRefereesList,
      educationList,
      setEducationList,
      skillsList,
      setSkillsList,
      workList,
      setWorkList,
      socialList,
      setSocialList,
      syncStorage,
   };
   return (
      <DataContext.Provider value={value}>
         {/** Render the children */}
         {children}
      </DataContext.Provider>
   );
};

export { DataContext, DataProvider };
