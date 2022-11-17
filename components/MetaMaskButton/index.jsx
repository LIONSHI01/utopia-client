import React from 'react';
import Image from 'next/image';

import { ButtonLoader } from '../index';
import { ButtonWrapper } from './index.styles';
import MetaMaskIcon from '../../assets/image/meta_mask.png';

const MetaMaskButton = ({ isLoading, ...otherProps }) => {
  return (
    <ButtonWrapper {...otherProps}>
      <div className="meta_mask_icon">
        {isLoading ? (
          <ButtonLoader loaderColor="black" />
        ) : (
          <Image
            src={MetaMaskIcon}
            alt="meta_mask"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </div>
    </ButtonWrapper>
  );
};

export default MetaMaskButton;
