import { FC, useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
import { useRouter } from 'next/router';

type Props = {
    closeNewResumeModal: () => void;
};

export const NewResumeModal: FC<Props> = ({ closeNewResumeModal }) => {
    const { items, addNewItem } = useLocalStorage('resume');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState('');

    const saveNewResume = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const currentDate = new Date();

        const id = uuid().slice(0, 8);
        const created = format(currentDate, 'dd/MM/yy');
        const updated = format(currentDate, 'dd/MM/yy');

        const item = {
            id,
            title,
            description,
            created,
            updated,
        };

        addNewItem(item);
        closeNewResumeModal();
    };

    return (
        <div className="w-screen h-screen bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex items-center justify-center dark:bg-[rgba(255,255,255,0.6)]">
            <div className="w-96 h-96 bg-white dark:bg-[#1c1b22] rounded-md py-2 px-4">
                <div className="flex justify-end mb-10">
                    <p
                        className="text-3xl cursor-pointer"
                        onClick={closeNewResumeModal}
                    >
                        <i className="fa-solid fa-rectangle-xmark"></i>
                    </p>
                </div>
                <div className="text-white">
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        className="text-black border border-gray-500 rounded-md w-full mb-3 py-2 px-2 dark:text-white"
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        className="text-black border border-gray-500 rounded-md w-full mb-3 py-2 px-2 dark:text-white"
                        placeholder="Add a short description"
                        value={description}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                            setDescription(e.target.value);
                        }}
                    ></textarea>
                    <button
                        onClick={saveNewResume}
                        className="bg-secondary w-full rounded-md py-2"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};
