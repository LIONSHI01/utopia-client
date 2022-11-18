import { useState, useEffect } from 'react';

export const useConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);

  useEffect(() => {
    checkIsMetamaskInstalled();
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWalletHandler = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert('Please install Metamask extension.');
    }
  };

  const checkIsMetamaskInstalled = () => {
    setIsMetamaskInstalled(Boolean(window?.ethereum?.isMetaMask));
  };

  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        if (accounts?.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnectedWallet(true);
        } else {
          setIsConnectedWallet(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert('Please install Metamask extension.');
    }
  };
  const addWalletListener = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        window.ethereum.on('accountsChanged', (accounts) => {
          setWalletAddress(accounts[0]);
        });
      } catch (err) {
        setWalletAddress('');
        console.log(err.message);
      }
    } else {
      alert('Please install Metamask extension.');
    }
  };

  const switchAccountsHandler = async () => {
    await window.ethereum.request({
      method: 'wallet_requestPermissions',
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
  };

  const personalSignHandler = async () => {
    console.log('Personal Sign Ac:', walletAddress);

    const message = [
      'This site is requesting your signature to approve login authorization.',
      'I have read and accept the terms and conditions(https://utopia.org/terms) of this app.',
      'Please sign me in!',
    ].join('\n\n');

    try {
      return await window.ethereum.request({
        method: 'personal_sign',
        params: [message, walletAddress],
      });
    } catch (err) {
      return err;
    }
  };

  return {
    isMetamaskInstalled,
    isConnectedWallet,
    walletAddress,
    connectWalletHandler,
    switchAccountsHandler,
    personalSignHandler,
  };
};
