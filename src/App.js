import React from 'react';
import './App.css';
import { useWallet, UseWalletProvider } from 'use-wallet'
import { MetaMaskButton, Button } from 'rimble-ui';
import { ConnectedCard } from './components/ConnectedCard';
import walletConnectInit from './utils/WalletConnect';

function App() {
  const wallet = useWallet();
  return (
    <div className="App">
      {wallet.connected ? (
        <div align={"center"}>
        <ConnectedCard wallet={wallet}></ConnectedCard>
        </div>
      ) : (
        <div>
          <MetaMaskButton.Outline onClick={() => wallet.activate()}>Connect with MetaMask</MetaMaskButton.Outline>
          <Button.Outline onClick={() => walletConnectInit()}>Connect with WalletConnect</Button.Outline>
        </div>
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
