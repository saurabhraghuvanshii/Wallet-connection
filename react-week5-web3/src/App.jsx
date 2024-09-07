import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from "./Airdrop";

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

//Airdrop
function App() {
  
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/lOKMPNhBdUvXWYTj8RIEuJbzHv4chjfj"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <div>
            Hi there 
          </div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
