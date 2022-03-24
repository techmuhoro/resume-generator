import React, { createContext, FC, useState } from 'react';
import {
   Project,
   Referee,
   Education,
   Skill,
   Work,
   SocialMedia,
} from '@/types/data';

const DataContext = createContext<any>({});

const DataProvider: FC = ({ children }) => {
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
   };
   return (
      <DataContext.Provider value={value}>
         {/** Render the children */}
         {children}
      </DataContext.Provider>
   );
};

export { DataContext, DataProvider };
