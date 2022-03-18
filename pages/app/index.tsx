import type { NextPage } from 'next';
import Head from 'next/head';
import { AppHome, Header } from '../../components';

const App: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Resume</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <Header />
            <AppHome />
        </div>
    );
};

export default App;
