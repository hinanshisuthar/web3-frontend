import { useData } from "@/context/data-context.js";
import Head from "next/head.js";
import { Card } from "../Components/Card.jsx";
import styles from '../styles/Wallet.module.css'

export default function Account() {
    const { user } = useData();

    return (
        <>
            <Head>
                <title>My Wallet</title>
            </Head>
            <div className={styles.wrapper}>
                <div>
                    <h2>NFTs</h2>
                    <div className={styles.nftBox}>
                        {user.NFTs.slice(0, 7).map((item, index) => (
                            <Card
                                key={index}
                                name={item.contract?.name}
                                tokenType={item?.contract?.tokenType}
                                description={item?.description}
                                src={item.media[0]?.gateway}
                                styles={styles}
                            />
                        ))}
                    </div>
                </div>
                <nav>
                    <div>
                        <h3>My Account</h3>
                        {user.accountNo}
                    </div>
                    <div>
                        <h3>Balance: </h3>
                        {user.balance} ETH
                    </div>
                </nav>
            </div>
        </>
    );
}
