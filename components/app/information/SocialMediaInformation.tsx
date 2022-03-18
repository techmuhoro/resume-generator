import React, { useState } from 'react';
import { InfoHeader } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SocialMedia } from '@/types/data';
import { v4 as uuid } from 'uuid';

const SocialMediaInformation: React.FC = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const [showAddForm, setShowAddForm] = React.useState(false);
   const [editMode, setEditMode] = React.useState(false);
   const [editedSocialId, setEditedSocialId] = React.useState('');
   const [socialType, setSocialType] = useState('');
   const [socialLink, setSocialLink] = React.useState('');
   const [socialList, setSocialList] = React.useState<SocialMedia[]>([]);

   const toggleOpen = () => setIsOpen(!isOpen);
   const openForm = () => setShowAddForm(true);
   const closeForm = () => setShowAddForm(false);

   const clearFields = () => {
      setSocialType('');
      setSocialLink('');
   };

   const hardReset = () => {
      clearFields();
      closeForm();
      setEditMode(false);
      setEditedSocialId('');
   };

   const saveSocialMedia = () => {
      if (socialType.trim().length > 0 && socialType.trim().length > 1) {
         const newSocial: SocialMedia = {
            id: uuid().slice(0, 8),
            name: socialType.trim(),
            url: socialLink.trim(),
         };

         // save the new social media
         setSocialList([...socialList, newSocial]);

         clearFields();
         closeForm();
      }
   };

   const removeSocialMedia = (id: string) => {
      const newList = socialList.filter(item => item.id !== id);

      // update social list
      setSocialList(newList);
   };

   const editSocialMedia = (id: string) => {
      // fetch the social being editted
      const selectedSocial = socialList.find(item => item.id === id);
      if (selectedSocial) {
         // populate the fields
         setSocialType(selectedSocial.name);
         setSocialLink(selectedSocial.url);

         setEditMode(true);
         setEditedSocialId(id);
         openForm();
      }
   };

   const saveEditedSocialMedia = () => {
      const condition =
         socialType.trim().length > 0 && socialLink.trim().length > 0;

      if (condition) {
         const newList = socialList.map(item => {
            if (item.id === editedSocialId) {
               item.name = socialType.trim();
               item.url = socialLink.trim();
            }

            return item;
         });

         setSocialList(newList);
      }

      // reset everything
      hardReset();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader
            title="Social Media"
            isOpen={isOpen}
            toggleOpen={toggleOpen}
         />
         <>
            <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
               <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
                  {/** social list */}
                  {socialList.map(item => (
                     <div className="bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                        <div>
                           <p className="capitalize">{item.name}</p>
                        </div>
                        <div className="ml-auto flex ">
                           <button onClick={() => removeSocialMedia(item.id)}>
                              <FontAwesomeIcon
                                 icon={faMinusCircle}
                                 className="mr-2 "
                              />
                           </button>
                           <button onClick={() => editSocialMedia(item.id)}>
                              <FontAwesomeIcon
                                 icon={faEdit}
                                 className="text-green-500"
                              />
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className={`mb-4 ${showAddForm ? 'block' : 'hidden'}`}>
                  <div className="mb-2">
                     <label htmlFor="social type">Social Media</label>
                     <br />
                     <select
                        className={
                           'w-full bg-gray-200 py-1.5 px-2 rounded-[5px]'
                        }
                        value={socialType}
                        onChange={e => setSocialType(e.target.value)}
                     >
                        <option value="">Select social Media</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="twitter">Twitter</option>
                        <option value="github">Github</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">Youtube</option>
                        <option value="instagram">Instagram</option>
                        <option value="pintrest">Pintrest</option>
                     </select>
                  </div>
                  <div>
                     <label htmlFor="social-link">Link</label>
                     <input
                        type={'url'}
                        id="social-link"
                        className="w-full bg-gray-200 py-1.5 px-2 rounded-[5px]"
                        value={socialLink}
                        onChange={e => setSocialLink(e.target.value)}
                     />
                  </div>
               </div>
               <div className="flex justify-center items-center">
                  {/**btn */}
                  <button
                     onClick={
                        showAddForm
                           ? editMode
                              ? saveEditedSocialMedia
                              : saveSocialMedia
                           : openForm
                     }
                     className="border border-gray-400 rounded-[4px] w-1/4 py-1"
                  >
                     {showAddForm ? (
                        editMode ? (
                           'Edit'
                        ) : (
                           'Save'
                        )
                     ) : (
                        <>
                           <FontAwesomeIcon
                              className="text-purple-400 mr-2"
                              icon={faPlusCircle}
                           />
                           <span>Add</span>
                        </>
                     )}
                  </button>
                  {showAddForm && (
                     <>
                        <p
                           className="text-blue-500 cursor-pointer ml-2"
                           onClick={hardReset}
                        >
                           Cancel
                        </p>
                     </>
                  )}
               </div>
            </div>
         </>
      </div>
   );
};

export { SocialMediaInformation };
