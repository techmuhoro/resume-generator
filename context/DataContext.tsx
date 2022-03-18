import React, { createContext, FC, useState } from 'react';
import { Project } from '@/types/data';

const DataContext = createContext<any>({});

const DataProvider: FC = ({ children }) => {
   const [fname, setFname] = useState('');
   const [lname, setLname] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [title, setTitle] = useState('');
   const [website, setWebsite] = useState('');

   const [hobbiesList, setHobbiesList] = useState<string[]>([]);

   const [projectsList, setProjectList] = React.useState<Project[]>([]);

   const value = {
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
   };
   return (
      <DataContext.Provider value={value}>
         {/** Render the children */}
         {children}
      </DataContext.Provider>
   );
};

export { DataContext, DataProvider };
