import React from 'react';
import styled from 'styled-components';

import { BsEyeSlashFill, BsEyeFill } from '../ReactIcons';

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--black-light-2);
`;

const TogglePwButton = ({
  showPassword,
  setShowPassword,
  size,
  ...otherProps
}) => {
  return (
    <ButtonWrapper
      type="button"
      onClick={() => setShowPassword((prev) => !prev)}
      {...otherProps}
    >
      {showPassword ? (
        <BsEyeSlashFill size={size} />
      ) : (
        <BsEyeFill size={size} />
      )}
    </ButtonWrapper>
  );
};

export default TogglePwButton;
