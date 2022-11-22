import React, { useState, useRef, useEffect } from 'react';

import { ButtonLoader } from '../index';

import {
  BaseButton,
  OutlineRedButton,
  OutlineGreyButton,
  RawButton,
  BlackButton,
  Web3Button,
} from './index.styles';

export const BUTTON_TYPES = {
  base: 'base',
  black: 'black',
  outlineRed: 'outlined-red',
  outlineGrey: 'outlined-grey',
  raw: 'raw',
  web3: 'web3',
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.black]: BlackButton,
    [BUTTON_TYPES.outlineRed]: OutlineRedButton,
    [BUTTON_TYPES.outlineGrey]: OutlineGreyButton,
    [BUTTON_TYPES.raw]: RawButton,
    [BUTTON_TYPES.web3]: Web3Button,
  }[buttonType]);

const Button = ({
  loaderColor,
  children,
  isLoading,
  disable = false,
  size = 'm',
  fonsSize = '1.6rem',
  buttonType,
  width,
  height,
  ...otherProps
}) => {
  const [showLoader, setShowLoader] = useState(false);
  const ref = useRef(null);
  const CustomButton = getButton(buttonType);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      // Don’t forget to clear the timeout
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  return (
    <CustomButton
      disable={disable}
      ref={ref}
      size={size}
      fonsSize={fonsSize}
      width={width}
      height={height}
      showLoader={showLoader}
      {...otherProps}
    >
      {showLoader ? <ButtonLoader loaderColor={loaderColor} /> : children}
    </CustomButton>
  );
};

export default Button;
