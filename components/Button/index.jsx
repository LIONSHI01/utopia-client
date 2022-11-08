import React, { useState, useRef, useEffect } from 'react';

import { ButtonLoader } from '../index';

import {
  BaseButton,
  OutlineRedButton,
  OutlineGreyButton,
  RawButton,
} from './index.styles';

export const BUTTON_TYPES = {
  base: 'base',
  outlineRed: 'outlined-red',
  outlineGrey: 'outlined-grey',
  raw: 'raw',
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.outlineRed]: OutlineRedButton,
    [BUTTON_TYPES.outlineGrey]: OutlineGreyButton,
    [BUTTON_TYPES.raw]: RawButton,
  }[buttonType]);

const Button = ({
  children,
  isLoading,
  width,
  height,
  size = 'm',
  buttonType,
  ...otherProps
}) => {
  /* Capture the dimensions of the button before the loading happens
  so it doesn’t change size when showing the loader */
  const [showLoader, setShowLoader] = useState(false);
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const CustomButton = getButton(buttonType);

  // Save the dimensions here
  // useEffect(() => {
  //   if (ref.current && ref.current.getBoundingClientRect().width) {
  //     setWidth(ref.current.getBoundingClientRect().width);
  //   }
  //   if (ref.current && ref.current.getBoundingClientRect().height) {
  //     setHeight(ref.current.getBoundingClientRect().height);
  //   }
  // }, [children]);

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
      ref={ref}
      size={size}
      width
      height
      showLoader={showLoader}
      // style={
      //   width && height
      //     ? {
      //         width: `${width}px`,
      //         height: `${height}px`,
      //       }
      //     : {}
      // }
      {...otherProps}
    >
      {showLoader ? <ButtonLoader /> : children}
    </CustomButton>
  );
};

export default Button;
