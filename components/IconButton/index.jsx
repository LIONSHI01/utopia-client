import React from 'react';

import { BaseButton, HoverBackgroundButton } from './index.styles';

export const ICON_BUTTON_TYPES = {
  base: 'Base',
  hoverBackground: 'HoverBackground',
};

const getButton = (buttonType = ICON_BUTTON_TYPES.base) =>
  ({
    [ICON_BUTTON_TYPES.base]: BaseButton,
    [ICON_BUTTON_TYPES.hoverBackground]: HoverBackgroundButton,
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
