import React from 'react';
import './App.css';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { MetaMaskButton } from 'rimble-ui';
import { ConnectedCard } from './components/ConnectedCard';
import Web3 from 'web3';

function App() {
  const wallet = useWallet();
  window.addEventListener('load', async () => {
    let web3;
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            return web3;
        } catch (error) {
            console.error(error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
      return web3;
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });
  return (
    <div className="App">
      {wallet.connected ? (
        <div align={"center"}>
        <ConnectedCard wallet={wallet}></ConnectedCard>
        </div>
      ) : (
        <div>
          <MetaMaskButton.Outline onClick={() => wallet.activate()}>Connect with MetaMask</MetaMaskButton.Outline>
        </div>
      )}
    </div>
  );
}

export default () => (
  <UseWalletProvider
    chainId={42}
    connectors={{
      // This is how connectors get configured
    }}
  >
    <App />
  </UseWalletProvider>
)

