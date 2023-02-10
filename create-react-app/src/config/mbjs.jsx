import { mbjs } from '@mintbase-js/sdk';
import { NearWalletConnector } from '../components/NearWalletSelector';


export const MintbaseProvider = ({ children }) => {
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

  let callbackUrl = ''

  if (typeof window !== 'undefined') {
    callbackUrl = isDev ? `http://${window?.location.host}/success` : `https://${window?.location.host}/success`
  }

  mbjs.config({
    network: 'testnet',
    callbackUrl: callbackUrl,
    // contractAddress: id || 'buddha.mintspace2.testnet'
  });


  return <>
    {children}
    <div className="absolute flex align-left right-10 bottom-10">
      <NearWalletConnector />
    </div>
  </>
}