import React, { useState, useContext } from 'react';
import { Input, InputFlex, InfoHeader } from '../../';
import { DataContext } from '../../../context/DataContext';
import { DataContextType } from '../../../@types/data';

const PersonalInformation: React.FC = () => {
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
   } = value as DataContextType;

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
         {/* <div
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                className="flex cursor-pointer px-4 py-3"
            >
                <p className="w-8">{isOpen ? 'O' : 'C'}</p>
                <p>Personal informaton</p>
            </div> */}
         {isOpen && (
            <div className="px-4 pb-5">
               <InputFlex>
                  <Input
                     type="text"
                     holder="Firstname"
                     value={fname}
                     onChange={e => {
                        setFname(e.target.value);
                     }}
                  />
                  <Input
                     type="text"
                     holder="Lastname"
                     value={lname}
                     onChange={e => {
                        setLname(e.target.value);
                     }}
                  />
               </InputFlex>
               <InputFlex>
                  <Input
                     type="email"
                     holder="Email adress"
                     value={email}
                     onChange={e => {
                        setEmail(e.target.value);
                     }}
                  />
                  <Input
                     type="number"
                     holder="Mobile Number"
                     value={mobile}
                     onChange={e => {
                        setMobile(e.target.value);
                     }}
                  />
               </InputFlex>
               <InputFlex>
                  <Input
                     type="text"
                     holder="Title"
                     value={title}
                     onChange={e => {
                        setTitle(e.target.value);
                     }}
                  />
                  <Input
                     type="text"
                     holder="Personal website"
                     value={website}
                     onChange={e => {
                        setWebsite(e.target.value);
                     }}
                  />
               </InputFlex>
            </div>
         )}
      </div>
   );
};

export { PersonalInformation };
