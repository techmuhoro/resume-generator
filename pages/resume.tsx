import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header, Resumepage } from '../components';

const Resume: NextPage = () => {
    const router = useRouter();
    const { id: resumeId } = router.query;
    return (
        <div>
            {/* <Header /> */}
            <Resumepage resumeId={resumeId} />
        </div>
    );
};

export default Resume;
