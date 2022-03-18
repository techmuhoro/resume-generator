import React from 'react';

type Props = {
    type: string;
    holder: string;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input: React.FC<Props> = ({ type, holder, ...rest }) => {
    return (
        <div className="w-1/2">
            <input
                type={type}
                id="firstname"
                className="w-full py-1 px-2 rounded-md bg-gray-100"
                placeholder={holder}
                {...rest}
            />
        </div>
    );
};

export { Input };
