import './App.css';
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';

// near-api-js needs this Buffer polyfill further reading:
// https://github.com/near/near-api-js/issues/757
import { Buffer } from "buffer"
import { RouterProvider } from 'react-router-dom';
import router from './config/router';
import { mbjs } from '@mintbase-js/sdk';

function App() {
  global.Buffer = Buffer;

  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

  let callbackUrl = ''

  if (typeof window !== 'undefined') {
    callbackUrl = isDev ? `http://${window?.location.host}/success` : `https://${window?.location.host}/success`
  }

  mbjs.config({
    network: 'testnet',
    callbackUrl: callbackUrl,
    contractAddress: 'buddha.mintspace2.testnet'
  });


  return (
    <WalletContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </WalletContextProvider>
  );
}

export default App;
