import { FC } from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image';


const NavBar: FC = () => {
    return (
        <div className="bg-black text-white font-normal flex justify-center items-center py-4">
            <div className="flex items-center">
                <div className="mr-auto">
                    <Image src="/solanaLogo.png" height={30} width={200} />
                </div>
                <div className="ml-80 font-bold text-white text-3xl text-center">
                    <span className="">SolTransfer</span>
                </div>
            </div>
            <div className="ml-auto">
                <WalletMultiButton />
            </div>
        </div>
    )
}

export default NavBar;
