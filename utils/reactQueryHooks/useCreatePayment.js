import { useState, useEffect } from 'react';

export const useCreatePayment = (txValue) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState('');
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);

  useEffect(() => {
    checkIsMetamaskInstalled();
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const sendTransactionRequest = async () => {
    const gasPrice = '0x5208';
    // Convert number -> Wei -> hex string
    const amountHex = (txValue * Math.pow(10, 18)).toString(16);

    const tx = {
      from: walletAddress, //User connected address
      to: process.env.NEXT_PUBLIC_UTOPIA_WALLET,
      value: amountHex,
      gas: gasPrice,
    };

    console.log({ tx, amountHex });

    await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
  };

  const connectWalletHandler = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const chainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        setWalletAddress(accounts?.[0]);
        setChainId(chainId);
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
        const chainId = await window.ethereum.request({
          method: 'eth_chainId',
        });
        if (accounts?.length > 0) {
          setWalletAddress(accounts?.[0]);
          setIsConnectedWallet(true);
          setChainId(chainId);
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
          setWalletAddress(accounts?.[0]);
        });
        window.ethereum.on('chainChanged', (chainId) => {
          setChainId(chainId);
        });
      } catch (err) {
        setWalletAddress('');
        // setChainId(null);
        console.log(err.message);
      }
    } else {
      alert('Please install Metamask extension.');
    }
  };

  return {
    chainId,
    isMetamaskInstalled,
    isConnectedWallet,
    walletAddress,
    connectWalletHandler,
    sendTransactionRequest,
  };
};
