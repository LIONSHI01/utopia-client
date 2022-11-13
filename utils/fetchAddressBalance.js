import Web3 from 'web3';

const web3 = new Web3(process.env.NEXT_PUBLIC_INFURA_TESTNET_URL);

export const getAccountBalance = async (walletAddress) => {
  try {
    if (walletAddress) {
      const weiBalance = await web3.eth?.getBalance(walletAddress);
      const ethBalance = web3.utils?.fromWei(weiBalance, 'ether');
      return parseFloat(ethBalance).toFixed(4);
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
