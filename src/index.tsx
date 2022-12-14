import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Web3 from 'web3';
import { web3 } from './helper/web3';
import store from './logic/redux-toolkit/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const getLibrary = (provider: any) => {
  const library = new Web3(provider || web3.givenProvider);
  // library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <Web3ReactProvider getLibrary={getLibrary}>
        <App />
      </Web3ReactProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
