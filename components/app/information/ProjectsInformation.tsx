import React from 'react';
import { InfoHeader, InputFlex, Input } from 'components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlusCircle,
   faMinusCircle,
   faEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Project, DataContextType } from '@/types/data';
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from 'context/DataContext';

const ProjectsInformation: React.FC = () => {
   const [isOpen, setIsOpen] = React.useState(false);
   const [showProjectForm, setShowProjectForm] = React.useState(false);
   const [editMode, setEditMode] = React.useState(false);
   const [editedProjectId, setEditedProjectId] = React.useState('');
   const [name, setName] = React.useState('');
   const [url, setUrl] = React.useState('');
   const [description, setDescription] = React.useState('');

   // context
   const value = React.useContext(DataContext);
   const { projectsList, setProjectList } = value as DataContextType;
   // const [projectsList, setProjectList] = React.useState<Project[]>([]);

   // helper function
   const toggleOpen = () => setIsOpen(!isOpen);
   const openProjectForm = () => setShowProjectForm(true);
   const closeProjectForm = () => setShowProjectForm(false);

   const clearFormFields = () => {
      setName('');
      setUrl('');
      setDescription('');
   };

   const saveProject = () => {
      const condition =
         name.trim().length > 1 &&
         url.trim().length > 1 &&
         description.trim().length > 1;

      if (condition) {
         const newProject: Project = {
            id: uuidv4().slice(0, 8),
            name,
            url,
            description,
         };

         setProjectList([...projectsList, newProject]);

         // reset the variables
         clearFormFields();

         // close the form
         closeProjectForm();
      }
   };

   const removeProject = (id: string) => {
      id = id.trim();
      const newList = projectsList.filter(project => project.id !== id);

      setProjectList(newList);
   };

   const editProject = (id: string) => {
      id = id.trim();

      const project = projectsList.find(project => project.id === id);
      if (project) {
         // update the state value accordingly
         setName(project.name);
         setUrl(project.url);
         setDescription(project.description);

         openProjectForm();
         setEditMode(true);
         setEditedProjectId(project.id);
      }
   };
   const saveEditedProject = () => {
      const newList: Project[] = [...projectsList];
      newList.forEach(project => {
         if (project.id === editedProjectId) {
            project.name = name;
            project.url = url;
            project.description = description;
         }
      });

      setProjectList(newList);

      // do resets
      totalReset();
   };

   const totalReset = () => {
      clearFormFields();
      setEditMode(false);
      setEditedProjectId('');
      closeProjectForm();
   };

   return (
      <div className="border border-gray-300 rounded-md">
         <InfoHeader isOpen={isOpen} title="Projects" toggleOpen={toggleOpen} />
         <>
            <div className={`px-4 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
               <>
                  <div className="mb-4 flex gap-x-[3.5%] gap-y-3 flex-wrap">
                     {projectsList.map(p => (
                        <div className="bg-gray-200 w-[48%] flex items-center py-2 px-2 rounded-[5px]">
                           <div>
                              <p>{p.name}</p>
                           </div>
                           <div className="ml-auto flex ">
                              <button onClick={() => removeProject(p.id)}>
                                 <FontAwesomeIcon
                                    icon={faMinusCircle}
                                    className="mr-2 "
                                 />
                              </button>
                              <button onClick={() => editProject(p.id)}>
                                 <FontAwesomeIcon
                                    icon={faEdit}
                                    className="text-green-500"
                                 />
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
               </>
               <div className={`mb-4 ${showProjectForm ? 'block' : 'hidden'}`}>
                  {/**add project form */}
                  <div className="flex gap-x-4 mb-4">
                     <input
                        type="text"
                        className="w-1/2 bg-gray-100 py-1 px-2 rounded-[5px]"
                        placeholder="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                     />
                     <input
                        type="text"
                        className="w-1/2 bg-gray-100 py-1 px-2 rounded-[5px]"
                        placeholder="url"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                     />
                  </div>
                  <textarea
                     className="w-full bg-gray-100 py-1 px-2 rounded-[5px]"
                     placeholder="Brief description"
                     rows={5}
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                  ></textarea>
               </div>

               <div className="flex justify-center items-center">
                  <button
                     onClick={
                        showProjectForm
                           ? editMode
                              ? saveEditedProject
                              : saveProject
                           : openProjectForm
                     }
                     className="border border-gray-400 rounded-[4px] w-1/4 py-1"
                  >
                     {showProjectForm ? (
                        editMode ? (
                           'Edit'
                        ) : (
                           'Save'
                        )
                     ) : (
                        <>
                           <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="text-purple-400 mr-2"
                           />
                           <span>Add</span>
                        </>
                     )}
                  </button>
                  {showProjectForm && (
                     <p
                        onClick={totalReset}
                        className="text-blue-500 cursor-pointer ml-2"
                     >
                        cancel
                     </p>
                  )}
               </div>
            </div>
         </>
      </div>
   );
};

export { ProjectsInformation };
