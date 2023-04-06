import styles from '../styles/Home.module.css'

export const Landing = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.main}>
                <button>Connect</button>
                <span>Connect to view your metamask account.</span>
            </div>
        </main>
    )
}