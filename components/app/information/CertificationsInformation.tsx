import React from 'react';
import { InfoHeader } from '../../index';

const CertificationsInformation: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border border-gray-300 rounded-md">
            <InfoHeader
                title="Certifications"
                toggleOpen={toggleOpen}
                isOpen={isOpen}
            />
            {isOpen && (
                <div>
                    <p>This is certification information</p>
                </div>
            )}
        </div>
    );
};

export { CertificationsInformation };
