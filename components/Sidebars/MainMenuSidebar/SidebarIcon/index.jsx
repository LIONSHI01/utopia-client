import React from 'react';

import { IconWrapper } from './index.styles';

const SidebarIcon = ({ isOpen, ...otherProps }) => {
  console.log(isOpen);
  return (
    <IconWrapper {...otherProps} open={isOpen}>
      <div className="middle_dash" />
    </IconWrapper>
  );
};

export default SidebarIcon;
