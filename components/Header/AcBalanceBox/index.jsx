import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';
import validator from 'validator';

import { BiWalletAlt, RiArrowDownSFill } from '../../ReactIcons';
import { getAccountBalance } from '../../../utils/fetchAddressBalance';
import { FaucetModal, WaitingModal } from '../../index';
import { BoxContainer, DetailsWrapper } from './index.styles';
import ethIcon from '../../../assets/image/eth-icon.png';
import WalletDropdown from '../WalletDropdown';
import { claimFaucet } from '../../../utils/apiData/userRequest';

const AcBalanceBox = () => {
  const ref = useRef();
  const { data } = useSession();
  const user = data?.profile;

  // STATES
  const [ethBalance, setEthBalance] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFaucetModal, setShowFaucetModal] = useState(false);
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [claimHash, setClaimHash] = useState('');

  useEffect(() => {
    const getbalHandler = async () => {
      const res = await getAccountBalance(user?.walletAddress);
      setEthBalance(res);
    };
    getbalHandler();
  }, [user]);

  // FOR WAITING MODAL / CLAIM PROCESS FINISH STEP
  const waitModalTitle = 'Claiming Completed!';
  const waitModalMsg = 'You may view the claiming transaction on chain.';
  const waitingModalLink = `https://goerli.etherscan.io/tx/${claimHash}`;

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showDropdown && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showDropdown]);

  // API CALLS
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

  // HANDLERS
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

  if (!user?.walletAddress)
    return (
      <BoxContainer ref={ref} onClick={() => setShowDropdown((prev) => !prev)}>
        <DetailsWrapper>
          <BiWalletAlt size={17} />
          <RiArrowDownSFill size={17} />
        </DetailsWrapper>
        <WalletDropdown
          user={user}
          showup={showDropdown}
          setShowup={setShowDropdown}
        />
      </BoxContainer>
    );

  return (
    <>
      <BoxContainer ref={ref} onClick={() => setShowDropdown((prev) => !prev)}>
        <DetailsWrapper>
          <div className="icon_container">
            <Image
              src={ethIcon}
              alt="eth-icon"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <span className="eth_number">{ethBalance}</span>
          <RiArrowDownSFill size={17} />
        </DetailsWrapper>
        <WalletDropdown
          user={user}
          showup={showDropdown}
          setShowup={setShowDropdown}
          setShowFaucetModal={setShowFaucetModal}
        />
      </BoxContainer>
      <FaucetModal
        showup={showFaucetModal}
        setShowup={setShowFaucetModal}
        onSubmitClaimHandler={onSubmitClaimHandler}
      />
      <WaitingModal
        title={waitModalTitle}
        message={waitModalMsg}
        url={waitingModalLink}
        isLoading={isClaiming}
        showup={showWaitingModal}
        setShowup={setShowWaitingModal}
      />
    </>
  );
};

export default AcBalanceBox;
