import React from 'react';

import {
  BaseButton,
  HoverBackgroundButton,
  WhiteBackgroundButton,
} from './index.styles';

export const ICON_BUTTON_TYPES = {
  base: 'Base',
  hoverBackground: 'HoverBackground',
  whiteBackgroundButton: 'WhiteBackground',
};

const getButton = (buttonType = ICON_BUTTON_TYPES.base) =>
  ({
    [ICON_BUTTON_TYPES.base]: BaseButton,
    [ICON_BUTTON_TYPES.hoverBackground]: HoverBackgroundButton,
    [ICON_BUTTON_TYPES.whiteBackgroundButton]: WhiteBackgroundButton,
  }[buttonType]);

const IconButton = ({ children, size = 's', buttonType, ...otherProps }) => {
  const CustomButtonStyles = getButton(buttonType);

  return (
    <CustomButtonStyles {...otherProps} size={size}>
      {children}
    </CustomButtonStyles>
  );
};

export default IconButton;
