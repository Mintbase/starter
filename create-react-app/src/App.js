import './App.css';
import { WalletContextProvider } from '@mintbase-js/react'
import '@near-wallet-selector/modal-ui/styles.css';

// near-api-js needs this Buffer polyfill further reading:
// https://github.com/near/near-api-js/issues/757
import { Buffer } from "buffer"
import { BrowserRouter } from 'react-router-dom';
import  { AppRoutes } from './config/router';
import { MintbaseProvider } from './config/mbjs';

function App() {
  global.Buffer = Buffer;

  return (
    <WalletContextProvider>
      <div className="App">
        <BrowserRouter>
        <MintbaseProvider> 
             <AppRoutes />
          </MintbaseProvider>
        </BrowserRouter>
      </div>
    </WalletContextProvider>
  );
}

export default App;
