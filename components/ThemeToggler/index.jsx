import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.textDark};
  border-radius: 100px;
  font-size: 0.8rem;
  padding: 0.6rem;
  height: 3.7rem;
  width: 3.7rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.dropdownHover};
  }
`;

import { BsSun, BiMoon } from '../ReactIcons';
const ThemeToggler = ({ theme, setTheme, size }) => {
  return (
    <ToggleWrapper onClick={() => setTheme()}>
      {theme === 'light' ? <BsSun size={size} /> : <BiMoon size={size} />}
    </ToggleWrapper>
  );
};

export default ThemeToggler;
