import { useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { claimFaucet } from '../apiData/userRequest';
import validator from 'validator';

export const useClaimFaucet = () => {
  // STATES
  const [claimHash, setClaimHash] = useState('');
  const [showFaucetModal, setShowFaucetModal] = useState(false);
  const [showWaitingModal, setShowWaitingModal] = useState(false);

  // MSG for Waiting Modal
  const waitModalTitle = 'Claiming Completed!';
  const waitModalMsg = 'You may view the claiming transaction on chain.';
  const waitingModalLink = `https://goerli.etherscan.io/tx/${claimHash}`;

  const { isLoading: isClaiming, mutate: mutateClaimFaucet } = useMutation(
    claimFaucet,
    {
      onSuccess: (res) => {
        setClaimHash(res?.data?.data?.txHash);
        toast.success(
          'You have claim 0.0025 GoerliETH for testing, go buy something!'
        );
      },
      onError: (err) => {
        console.log(err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  const onSubmitClaimHandler = ({ userId, walletAddress }) => {
    if (!userId) return toast.error('You are not login, please login first.');
    if (!validator.isEthereumAddress(walletAddress))
      return toast.error(
        'Invalid ethereum address, please provide 64 character address whitch starts with "0x".'
      );

    setShowWaitingModal(true);
    setShowFaucetModal(false);
    mutateClaimFaucet({ userId, walletAddress });
  };

  return {
    isClaiming,
    onSubmitClaimHandler,
    showFaucetModal,
    setShowFaucetModal,
    showWaitingModal,
    setShowWaitingModal,
    waitModalTitle,
    waitModalMsg,
    waitingModalLink,
  };
};
