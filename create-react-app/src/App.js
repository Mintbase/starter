import './App.css';
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';

// near-api-js needs this Buffer polyfill further reading:
// https://github.com/near/near-api-js/issues/757
import { Buffer } from "buffer"
import { RouterProvider } from 'react-router-dom';
import router from './config/router';

function App() {
  global.Buffer = Buffer;

  return (
    <WalletContextProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </WalletContextProvider>
  );
}

export default App;
