import React from 'react';

import {
  BaseButton,
  OutlineRedButton,
  OutlineGreyButton,
} from './index.styles';

export const BUTTON_TYPES = {
  base: 'base',
  outlineRed: 'outlined-red',
  outlineGrey: 'outlined-grey',
};

const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.outlineRed]: OutlineRedButton,
    [BUTTON_TYPES.outlineGrey]: OutlineGreyButton,
  }[buttonType]);

const Button = ({ children, size = 'm', buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton size={size} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
