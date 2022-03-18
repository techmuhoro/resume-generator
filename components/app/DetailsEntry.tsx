import React from 'react';
import {
    PersonalInformation,
    ProjectsInformation,
    ObjectiveInformation,
    WorkInformation,
    SkillsInformation,
    CertificationsInformation,
    RefereesInformation,
    HobbiesInformation,
    HonorsInformation,
    EducationInformation,
    SocialMediaInformation,
} from '..';

const DetailsEntry: React.FC = () => {
    return (
        <div>
            <p className="text-center mt-3 font-bold text-2xl mb-3">
                Enter Details
            </p>
            <div className="w-[90%] mx-auto mb-3">
                <ObjectiveInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <PersonalInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <ProjectsInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <WorkInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <SkillsInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <CertificationsInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <RefereesInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <HobbiesInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <HonorsInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <EducationInformation />
            </div>
            <div className="w-[90%] mx-auto mb-3">
                <SocialMediaInformation />
            </div>
        </div>
    );
};

export { DetailsEntry };
