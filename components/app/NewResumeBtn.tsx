import { FC } from 'react';

type Props = {
    openNewResumeModal: () => void;
};

export const NewResumeBtn: FC<Props> = ({ openNewResumeModal }) => {
    return (
        <div
            className="cursor-pointer inline-block"
            onClick={openNewResumeModal}
        >
            <div className="flex flex-col items-center text-secondary dark:text-white">
                <p className="text-3xl">
                    <span>
                        <i className="fa-solid fa-circle-plus"></i>
                    </span>
                </p>
                <p className="font-semibold dark:text-white">Add new</p>
            </div>
        </div>
    );
};
