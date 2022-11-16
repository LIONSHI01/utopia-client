import React from 'react';
import Image from 'next/image';

import { ButtonWrapper } from './index.styles';
import MetaMaskIcon from '../../assets/image/meta_mask.png';

const MetaMaskButton = ({ ...otherProps }) => {
  return (
    <ButtonWrapper {...otherProps}>
      <div className="meta_mask_icon">
        <Image
          src={MetaMaskIcon}
          alt="meta_mask"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </ButtonWrapper>
  );
};

export default MetaMaskButton;
