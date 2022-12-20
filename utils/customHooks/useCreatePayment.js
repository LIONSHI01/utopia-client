import { useState, useEffect } from 'react';

export const useCreatePayment = (txValue) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState('');
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);
  const [ethBalance, setEthBalance] = useState(null);
  const [isTxCompleted, setIsTxCompleted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  useEffect(() => {
    checkIsMetamaskInstalled();
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress, chainId]);
  const [isBuying, setIsBuying] = useState(false);

  // USER UX FLOW
  // 1) Check if connected to wallet
  // 2) if not, ask to connect
  // 3) Check if connected to chain 0x5
  // 4) if not, ask permission to change to chain 0x5
  // 5) Allow to process tx

  /* CONNECT WALLET */
  const connectWalletHandler = async () => {
    setIsConnecting(true);
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const chainId = await window.ethereum.request({
          method: 'eth_chainId',
        });

        if (chainId !== '0x5')
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x5' }],
          });

        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts?.[0], 'latest'],
        });

        // Parse balance
        const wei = parseInt(balance, 16);
        const eth = wei / Math.pow(10, 18);

        setWalletAddress(accounts?.[0]);
        setChainId(chainId);
        setEthBalance(eth);
        setIsConnecting(false);
      } catch (err) {
        console.log(err.message);
        setIsConnecting(false);
      }
    }
  };

  /* CREATE TX */
  const sendTransactionRequest = async () => {
    setIsBuying(true);
    try {
      if (chainId !== '0x5')
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x5' }],
        });

      // const gasPrice = '0x5208';
      const gasPrice = '0x186a0';
      // Convert number -> Wei -> hex string
      const amountHex = (txValue * Math.pow(10, 18)).toString(16);

      // Transaction details
      const tx = {
        from: walletAddress, //User connected address
        to: process.env.NEXT_PUBLIC_UTOPIA_WALLET,
        value: amountHex,
        gas: gasPrice,
      };

      const transactionHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [tx],
      });

      setTransactionHash(transactionHash);
      setIsBuying(false);
      setIsTxCompleted(true);

      return transactionHash;
    } catch (err) {
      setIsBuying(false);

      console.log(err);
      return err;
    }
  };
  /* SWITCH WALLET */
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

  // CHECK IF WALLET INSTALLED
  const checkIsMetamaskInstalled = () => {
    setIsMetamaskInstalled(Boolean(window?.ethereum?.isMetaMask));
  };

  // READ CONNECTED WALLET INFO
  const getCurrentWalletConnected = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        // Get Account
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });

        // Get Chain Id
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
    }
  };

  // LISTEN TO CHANGES OF WALLET
  const addWalletListener = async () => {
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      try {
        const accounts = await window.ethereum.on(
          'accountsChanged',
          (accounts) => {
            setWalletAddress(accounts?.[0]);
          }
        );

        await window.ethereum.on('chainChanged', (chainId) => {
          setChainId(chainId);
        });

        // Update Account balance when ac changed
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [accounts?.selectedAddress, 'latest'],
        });

        // Parse balance
        const wei = parseInt(balance, 16);
        const eth = wei / Math.pow(10, 18);
        setEthBalance(eth);
      } catch (err) {
        setWalletAddress('');
        setEthBalance(null);

        console.log(err.message);
      }
    }
  };

  return {
    isConnecting,
    chainId,
    ethBalance,
    isMetamaskInstalled,
    isConnectedWallet,
    walletAddress,
    isBuying,
    isTxCompleted,
    transactionHash,
    connectWalletHandler,
    sendTransactionRequest,
    switchAccountsHandler,
  };
};
