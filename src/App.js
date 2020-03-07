import React from 'react';
import './App.css';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { MetaMaskButton, EthAddress} from 'rimble-ui';

function App() {
  const wallet = useWallet()
  return (
    <div className="App">
      {wallet.connected ? (
        <div>
          <EthAddress address={wallet.account}/>
          <div>Balance: {wallet.balance / 1e18} ETH</div>
          <div>Network: {wallet.networkName}</div>
          <button onClick={() => wallet.deactivate()}>disconnect</button>
        </div>
      ) : (
          <MetaMaskButton.Outline onClick={() => wallet.activate()}>Connect with MetaMask</MetaMaskButton.Outline>
      )}
    </div>
  );
}

export default () => (
  <UseWalletProvider
    chainId={3}
    connectors={{
      // This is how connectors get configured
    }}
  >
    <App />
  </UseWalletProvider>
)
