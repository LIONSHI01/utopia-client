import React, { useState } from 'react';
import validator from 'validator';
import Link from 'next/link';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { FiEdit, BsDropletHalf } from '../../ReactIcons';
import { DropdownContainer, ContentWrapper } from './index.styles';
import { FaucetModal, WaitingModal } from '../../index';
import { claimFaucet } from '../../../utils/apiData/userRequest';

const WalletDropdown = ({ showup, setShowup, user, setShowFaucetModal }) => {
  const onClaimHandler = () => {
    setShowup(false);
    setShowFaucetModal(true);
  };

  return (
    <DropdownContainer showup={showup}>
      <ContentWrapper showup={showup}>
        <ul>
          <li className="item faucet" onClick={onClaimHandler}>
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
  );
};

export default WalletDropdown;
