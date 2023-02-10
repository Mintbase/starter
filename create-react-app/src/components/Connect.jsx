import { NearWalletConnector } from "../components/NearWalletSelector";
import { MbText } from "mintbase-ui";

export const Connect =  () => {
  return (
    <div className="w-full justify-center text-center h-screen align-center flex flex-wrap items-center text-gray-500">
      <div className='h-auto'>
        <div className="mx-6 sm:mx-24 mt-4 mb-4">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center space-y-8">
              <div className="flex flex-col justify-center items-center space-y-8">
                <MbText className="h1-90">Mintbase Starter Create React App</MbText>
                <MbText className="p-big-90">
                  Minter and Store Deploy.
                </MbText>
              </div>
              <div>
                <NearWalletConnector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}