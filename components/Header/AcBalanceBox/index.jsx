import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { BiWalletAlt, RiArrowDownSFill } from '../../ReactIcons';
import { getAccountBalance } from '../../../utils/fetchAddressBalance';
import { FaucetModal, WaitingModal } from '../../index';
import { BoxContainer, DetailsWrapper } from './index.styles';
import ethIcon from '../../../assets/image/eth-icon.png';
import WalletDropdown from '../WalletDropdown';
import { useClaimFaucet } from '../../../utils/customHooks/useClaimFaucet';

const AcBalanceBox = () => {
  const ref = useRef();
  const { data } = useSession();
  const user = data?.profile;
  const {
    isClaiming,
    onSubmitClaimHandler,
    showFaucetModal,
    setShowFaucetModal,
    showWaitingModal,
    setShowWaitingModal,
    waitModalTitle,
    waitModalMsg,
    waitingModalLink,
  } = useClaimFaucet();

  // STATES
  const [ethBalance, setEthBalance] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const getbalHandler = async () => {
      const res = await getAccountBalance(user?.walletAddress);
      setEthBalance(res);
    };
    getbalHandler();
  }, [user]);

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

  if (!user?.walletAddress)
    return (
      <>
        <BoxContainer
          ref={ref}
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <DetailsWrapper>
            <BiWalletAlt size={17} />
            <RiArrowDownSFill size={17} />
          </DetailsWrapper>
        </BoxContainer>
        <WalletDropdown
          user={user}
          showup={showDropdown}
          setShowup={setShowDropdown}
          setShowFaucetModal={setShowFaucetModal}
        />
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
