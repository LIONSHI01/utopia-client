import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { BiWalletAlt, RiArrowDownSFill } from '../../ReactIcons';
import { getAccountBalance } from '../../../utils/fetchAddressBalance';
import { selectUser } from '../../../store/user/user.selector';
import { BoxContainer, DetailsWrapper } from './index.styles';
import ethIcon from '../../../assets/image/eth-icon.png';
import WalletDropdown from '../WalletDropdown';

const AcBalanceBox = () => {
  const user = useSelector(selectUser);
  const ref = useRef();

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
      window.removeEventListener('mousedown', checkIfClickOutside);
    };
  }, [showDropdown]);

  if (!user?.walletAddress)
    return (
      <BoxContainer ref={ref} onClick={() => setShowDropdown(!showDropdown)}>
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
    <BoxContainer ref={ref} onClick={() => setShowDropdown(!showDropdown)}>
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
      />
    </BoxContainer>
  );
};

export default AcBalanceBox;
