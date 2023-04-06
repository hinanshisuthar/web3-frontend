import { useData } from '@/context/data-context'
import Head from 'next/head';
import styles from '../styles/Home.module.css'

const Landing = () => {
    const { hasMetamask, msg } = useData();

    return (
        <>
            <main className={styles.wrapper}>
                <div className={styles.main}>
                    <button onClick={hasMetamask}>Connect</button>
                    <span>{msg}</span>
                </div>
            </main>
        </>
    )
}

export default Landing;