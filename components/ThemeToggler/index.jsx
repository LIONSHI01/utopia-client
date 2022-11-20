import React from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textDark};
  border-radius: 100px;
  font-size: 0.8rem;
  padding: 0.6rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.dropdownHover};
  }
`;

import { BsSun, BiMoon } from '../ReactIcons';
const ThemeToggler = ({ theme, setTheme, size }) => {
  return (
    <ToggleWrapper>
      {theme === 'light' ? (
        <BsSun size={size} onClick={() => setTheme()} />
      ) : (
        <BiMoon size={size} onClick={() => setTheme()} />
      )}
    </ToggleWrapper>
  );
};

export default ThemeToggler;
