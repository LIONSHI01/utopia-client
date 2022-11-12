import { useState } from 'react';

export const useConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_accounts' }).then((res) => {
        setWalletAddress(res[0]);
      });
    } else {
      alert('Please install Metamask extension.');
    }
  };

  return { walletAddress, connectWalletHandler };
};

// eth_requestAccounts
