import React, { useState } from 'react';
import validator from 'validator';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { FiEdit, BsDropletHalf } from '../../ReactIcons';
import { DropdownContainer, ContentWrapper } from './index.styles';
import { FaucetModal, WaitingModal } from '../../index';
import { claimFaucet } from '../../../utils/apiData/userRequest';

const WalletDropdown = ({ showup, setShowup, user }) => {
  const [showFaucetModal, setShowFaucetModal] = useState(false);
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const [claimHash, setClaimHash] = useState('');

  // FOR WAITING MODAL / CLAIM PROCESS FINISH STEP
  const waitModalTitle = 'Claiming Completed!';
  const waitModalMsg = 'You may view the claiming transaction on chain.';
  const waitingModalLink = `https://goerli.etherscan.io/tx/${claimHash}`;

  // HANLDERS
  const onSubmitClaimHandler = ({ userId, walletAddress }) => {
    if (!validator.isEthereumAddress(walletAddress))
      return toast.error(
        'Invalid ethereum address, please provide 64 character address whitch starts with "0x".'
      );

    setShowWaitingModal(true);
    setShowFaucetModal(false);
    mutateClaimFaucet({ userId, walletAddress });
  };

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
  return (
    <>
      <DropdownContainer showup={showup}>
        <ContentWrapper showup={showup}>
          <ul>
            <li
              className="item faucet"
              onClick={() => {
                setShowup(false);
                setShowFaucetModal(true);
              }}
            >
              <BsDropletHalf size={15} />
              <p>Claim Test Eth</p>
            </li>
            <li onClick={() => setShowup(false)}>
              <Link href={`/users/${user?.id}/settings`}>
                <a className="item">
                  <FiEdit size={15} />
                  <p>Edit Wallet</p>
                </a>
              </Link>
            </li>
          </ul>
        </ContentWrapper>
      </DropdownContainer>
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

export default WalletDropdown;
