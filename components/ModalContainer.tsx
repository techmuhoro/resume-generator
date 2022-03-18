import { FC } from 'react';

type Props = {
    clickHandler: () => void;
};
export const ModalContainer: FC = ({ children }) => {
    return (
        <div className="w-screen h-screen bg-[rgba(0,0,0,0.3)] fixed top-0 left-0 flex items-center justify-center dark:bg-[rgba(255,255,255,0.6)]">
            {/** This is just a container */}
            {children}
        </div>
    );
};
