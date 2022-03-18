import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <p className="">Hello James from Home</p>
            <button
                className="border border-gray-500 px-10 py-2 rounded-md"
                onClick={() => {
                    router.push('/app');
                }}
            >
                Go to App
            </button>
        </div>
    );
};

export default Home;
