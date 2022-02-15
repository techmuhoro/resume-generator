import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <p>Hello James from Home</p>
            <button>Go to App</button>
        </div>
    );
};

export default Home;
