import { useWallet } from "@mintbase-js/react";
import { MbButtonLink } from "mintbase-ui";
import { Connect } from "./Connect";

export default function Home() {
  const { isConnected } = useWallet();

  if (isConnected)
    return (
      <>
      <div className="w-full justify-center text-center h-screen align-center flex flex-wrap items-center">
        <div className='h-auto'>
          <div className="flex items-center justify-center gap-12">
            <MbButtonLink text="Mint NFT" href="/mint"></MbButtonLink>
            <MbButtonLink text="Store Deploy" href="/new-store"></MbButtonLink>
          </div>
        </div>
      </div>
      </>
    );

    return <Connect />
}
