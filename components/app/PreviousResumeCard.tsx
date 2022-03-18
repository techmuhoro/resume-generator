import { FC } from 'react';
import resumeCardImage from '../../imgs/resume-1.svg';
import Image from 'next/image';
import useLocalStrogae from '../../hooks/useLocalStorage';
import { useRouter } from 'next/router';

type Props = {
    resume: any;
    removeItem: ((id: string) => any) | null;
};

export const PreviousResumeCard: FC<Props> = ({ resume }) => {
    const router = useRouter();

    return (
        <div className="border border-gray-400 rounded-md w-[250px] overflow-hidden">
            <div className="h-[100px] py-1 bg-white mb-3 relative">
                <Image src={resumeCardImage} layout="fill" />
            </div>
            <p className="text-center font-semibold mb-1">{resume.title}</p>
            <div className="text-sm text-gray-600 flex px-1 mb-4 dark:text-gray-200">
                <p className="w-1/2">Created: {resume.created}</p>

                <p className="w-1/2">Updated: {resume.updated}</p>
            </div>
            <div className="flex mb-3 px-1 gap-x-1 text-sm font-semibold">
                <button
                    onClick={() => {
                        router.push(`/resume?id=${resume.id}`);
                    }}
                    className="bg-secondary text-white w-1/2 rounded-sm font-semibold py-1 flex justify-center items-center gap-x-2"
                >
                    <span>
                        <i className="fa-solid fa-rocket"></i>
                    </span>
                    <span>Launch</span>
                </button>
                <button
                    onClick={() => {
                        const { removeItem } = useLocalStrogae('resume');
                        removeItem(resume.id);
                        router.reload();
                    }}
                    className="bg-gray-200 w-1/2 rounded-sm font-semibold py-1 flex justify-center items-center gap-x-2 dark:text-black"
                >
                    <span>
                        <i className="fa-solid fa-trash-can"></i>
                    </span>
                    <span>Remove</span>
                </button>
            </div>
        </div>
    );
};
