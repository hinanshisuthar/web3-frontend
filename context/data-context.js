import { createContext, useContext, useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import { useRouter } from "next/router";

// IMPORTANT NOTE: for the screenshots in the README, I have used a public wallet address => '0x983110309620D911731Ac0932219af06091b6744'.
// In order to show NFTS, balance etc..
// Replaced it with the userAccount defined on line 37
// For code purposes, using the wallet Address coming from the user directly.

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const router = useRouter();
    const [user, setUser] = useState({
        accountNo: '',
        balance: '',
        NFTs: []
    });
    const [msg, setMsg] = useState(
        "Connect to view your metamask wallet."
    );

    const getBalance = async (walletAddress) => {
        const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [walletAddress, "latest"],
        });
        setUser((user) => { return { ...user, balance: parseInt(balance, 16) } })
    };

    const logIn = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setMsg("Logging you in...");

            // can be replaces with public wallet address.
            const userAccount = accounts[0];

            setUser({ ...user, accountNo: userAccount })
            getBalance(userAccount);
            fetchNFTs(userAccount);

            setTimeout(() => {
                router.push('/Wallet')
            }, 2000);
        } catch (err) {
            console.error(err)
        }
    };

    const hasMetamask = () => {
        if (typeof window.ethereum !== "undefined") {
            logIn();
        } else {
            setMsg("Install metamask in order to view your wallet.");
        }
    };

    const settings = {
        apiKey: "demo",
        network: Network.ETH_MAINNET,
    };
    const alchemy = new Alchemy(settings);

    const fetchNFTs = async (userAccount) => {
        try {
            const allFetchedNFTs = await alchemy.nft.getNftsForOwner(userAccount);
            setUser((user) => ({ ...user, NFTs: allFetchedNFTs.ownedNfts }))
        } catch (err) {
            console.error(err)
        }
    }

    return <DataContext.Provider value={{ user, msg, hasMetamask }}>
        {children}
    </DataContext.Provider>
}

const useData = () => useContext(DataContext)

export { useData, DataProvider }