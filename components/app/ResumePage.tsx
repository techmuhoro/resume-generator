import React from 'react';
import { DetailsEntry, Preview } from '../';

type Props = {
    resumeId: string | undefined | string[];
};
const Resumepage: React.FC<Props> = props => {
    const { resumeId } = props;

    return (
        <div className="h-screen  items-stretch">
            <div className="flex h-full">
                <div className="w-5/12 h-full">
                    <DetailsEntry />
                </div>
                <div className="w-7/12 bg-gray-100 h-full">
                    <Preview />
                </div>
            </div>
        </div>
    );
};

export { Resumepage };
