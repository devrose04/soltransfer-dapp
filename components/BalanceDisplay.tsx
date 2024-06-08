import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { FC, useEffect, useState } from 'react';


export const BalanceDisplay: FC = () => {
    const [Balance, setBalance] = useState(0);
    const { connection } = useConnection();
    const { publickey } = useWallet();

    useEffect(() => {
        if (!connection || !publickey) {
            return 
        }

        // Ensure the balance updates after the transaction completes
        connection.onAccountChange(
            publickey,
            (updatedAccountInfo) => {
                setBalance(updatedAccountInfo.lamports / LAMPORTS_PER_SOL)
            },
            "confirmed",
        );

        connection.getAccountInfo(publickey).then((info) => {
            setBalance(info.lamports);
        });
    }, [connection, publickey]);

    return (
        <p>{publickey ? `Balance: ${Balance / LAMPORTS_PER_SOL} SOL`: ""}</p>
    )

}

export default BalanceDisplay;