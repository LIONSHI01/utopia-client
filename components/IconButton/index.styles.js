import styled, { css } from 'styled-components';

const smallSizeStyles = css`
  height: 3rem;
  width: 3rem;
`;

const bigSizeStyles = css`
  height: 4rem;
  width: 4rem;
`;

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 100px;
  cursor: pointer;

  ${(props) => props.size === 's' && smallSizeStyles}
  ${(props) => props.size === 'x' && bigSizeStyles}
`;

export const HoverBackgroundButton = styled(BaseButton)`
  :hover {
    background-color: var(--grey-light-2);
  }
`;
