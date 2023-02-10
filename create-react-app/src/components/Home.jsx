import { useWallet } from "@mintbase-js/react";
import { NearWalletConnector } from "../components/NearWalletSelector";
import Minter from "../components/Minter";
import { mbjs } from "@mintbase-js/sdk";
import { MbText } from "mintbase-ui";

export default function Home() {
  const { isConnected } = useWallet();



  if (isConnected)
    return (
      <main className="flex flex-col items-center justify-center mt-2">
        <NearWalletConnector />
        <Minter />
      </main>
    );

  return (
    <>
      <main className="flex flex-col items-center justify-center mt-2">
        <div className="flex flex-1 flex-col min-h-screen text-gray-500">
          <div className="mx-6 sm:mx-24 mt-4 mb-4">
            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center space-y-8">
                <div className="flex flex-col justify-center items-center space-y-8">
                  <MbText className="h1-90">Simple Minter</MbText>
                  <MbText className="p-big-90">
                    A simple NFT Minter on Mintbase
                  </MbText>
                </div>
                <div>
                  <NearWalletConnector />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
