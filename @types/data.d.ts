import React from 'react';

export type Project = {
   id: string;
   name: string;
   url: string;
   description: string;
};
export type Skill = {
   id: string;
   name: string;
   level: string;
};
export type Referee = {
   id: string;
   name: string;
   title: string;
   mobileNumber: string;
   email: string;
};
export type SocialMedia = {
   id: string;
   name: string;
   url: string;
};
export type Work = {
   id: string;
   company: string;
   postion: string;
   description: string;
   startDate: string;
   endDate: string;
};
export type Education = {
   id: string;
   title: string;
   level: string;
   school: string;
   grade: string;
   startDate: string;
   endDate: string;
};

export type DataContextType = {
   objective: string;
   setObjective: React.Dispatch<React.SetStateAction<string>>;
   fname: string;
   setFname: React.Dispatch<React.SetStateAction<string>>;
   lname: string;
   setLname: React.Dispatch<React.SetStateAction<string>>;
   email: string;
   setEmail: React.Dispatch<React.SetStateAction<string>>;
   mobile: string;
   setMobile: React.Dispatch<React.SetStateAction<string>>;
   title: string;
   setTitle: React.Dispatch<React.SetStateAction<string>>;
   website: string;
   setWebsite: React.Dispatch<React.SetStateAction<string>>;
   hobbiesList: string[];
   setHobbiesList: React.Dispatch<React.SetStateAction<string[]>>;
   projectsList: Project[];
   setProjectList: React.Dispatch<React.SetStateAction<Project[]>>;
   refereesList: Referee[];
   setRefereesList: React.Dispatch<React.SetStateAction<Referee[]>>;
   educationList: Education[];
   setEducationList: React.Dispatch<React.SetStateAction<Education[]>>;
   skillsList: Skill[];
   setSkillsList: React.Dispatch<React.SetStateAction<Skill[]>>;
   workList: Work[];
   setWorkList: React.Dispatch<React.SetStateAction<Work[]>>;
   socialList: SocialMedia[];
   setSocialList: React.Dispatch<React.SetStateAction<SocialMedia[]>>;
   syncStorage: () => void;
};

export type LocalStorageData = {
   objective: string;
   fname: string;
   lname: string;
   email: string;
   mobile: string;
   title: string;
   website: string;
   hobbiesList: string[];
   projectsList: Project[];
   refereesList: Referee[];
   educationList: Education[];
   skillsList: Skill[];
   workList: Work[];
   socialList: SocialMedia[];
};
