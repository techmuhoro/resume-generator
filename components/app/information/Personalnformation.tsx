import React, { useState, useContext, useEffect } from 'react';
import { Input, InputFlex, InfoHeader } from 'components';
import { DataContext } from 'context/DataContext';
import { DataContextType, LocalStorageData } from '@/types/data';
import { useRouter } from 'next/router';

const PersonalInformation: React.FC = () => {
   const router = useRouter();
   let { id: resumeId } = router.query;
   // const resumeId = '35f5bf64';
   const value = useContext(DataContext);
   const {
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
      syncStorage,
   } = value as DataContextType;

   React.useEffect(() => {
      // update local storage when below variables change
      syncStorage();
   }, [fname, lname, email, mobile, title, website]);

   // useEffect(() => {
   //    console.log('hello1');
   //    if (resumeId) {
   //       console.log('hello2');
   //       Array.isArray(resumeId) && (resumeId = resumeId[0]);
   //       console.log(resumeId);
   //       const stringData = localStorage.getItem(resumeId);

   //       if (stringData) {
   //          console.log('hello3');
   //          const data = JSON.parse(stringData) as LocalStorageData;
   //          console.log(data);
   //          // populate data
   //          setFname(data.fname);
   //          setLname(data.lname);
   //          setEmail(data.email);
   //          setMobile(data.mobile);
   //          setTitle(data.title);
   //          setWebsite(data.website);
   //       }
   //    }
   // }, [resumeId]);

   const [isOpen, setIsOpen] = useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   const lnameChange: React.ChangeEventHandler<HTMLInputElement> = e => {
      setLname(e.target.value);
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader
            title="Personal Information"
            isOpen={isOpen}
            toggleOpen={toggleOpen}
         />
         <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex gap-x-4 mb-3">
               <div className="w-1/2">
                  <label htmlFor="fname">Firstname</label>
                  <br />
                  <input
                     type="text"
                     id="fname"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={fname}
                     onChange={e => {
                        setFname(e.target.value);
                     }}
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="lname">Lastname</label>
                  <input
                     type="text"
                     id="lname"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={lname}
                     onChange={e => {
                        setLname(e.target.value);
                     }}
                  />
               </div>
            </div>
            <div className="flex gap-x-4 mb-3">
               <div className="w-1/2">
                  <label htmlFor="email">Email Address</label>
                  <input
                     type="email"
                     id="email"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={email}
                     onChange={e => {
                        setEmail(e.target.value);
                        // syncStorage();
                     }}
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                     type="text"
                     id="mobile"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={mobile}
                     onChange={e => {
                        setMobile(e.target.value);
                        // syncStorage();
                     }}
                  />
               </div>
            </div>
            <div className="flex gap-x-4 mb-1">
               <div className="w-1/2">
                  <label htmlFor="title">Title</label>
                  <input
                     type="text"
                     id="title"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={title}
                     onChange={e => {
                        setTitle(e.target.value);
                        // syncStorage();
                     }}
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="website">Website</label>
                  <input
                     type="text"
                     id="website"
                     className="w-full py-1 px-2 rounded-md bg-gray-100"
                     value={website}
                     onChange={e => {
                        setWebsite(e.target.value);
                        // syncStorage();
                     }}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export { PersonalInformation };
