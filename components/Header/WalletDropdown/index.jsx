import React from 'react';
import Link from 'next/link';

import { FiEdit, BsDropletHalf } from '../../ReactIcons';
import { DropdownContainer, ContentWrapper } from './index.styles';

const WalletDropdown = ({ showup, setShowup, user, setShowFaucetModal }) => {
  const onClaimHandler = () => {
    setShowup(true);
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
          <li onClick={() => setShowup(true)}>
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
