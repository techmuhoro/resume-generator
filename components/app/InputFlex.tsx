import React from 'react';

const InputFlex: React.FC = ({ children }) => {
    return (
        <div className="flex gap-x-4 mb-4">
            {/** render the inputs */}
            {children}
        </div>
    );
};

export { InputFlex };
