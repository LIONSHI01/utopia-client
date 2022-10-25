import styled, { css } from 'styled-components';

const smallSizeStyles = css`
  height: 3rem;
  width: 3rem;
`;

const bigSizeStyles = css`
  height: 4rem;
  width: 4rem;
`;
const megaSizeStyles = css`
  height: 5rem;
  width: 5rem;
`;

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s;

  :active {
    scale: 0.85;
  }

  ${(props) => props.size === 's' && smallSizeStyles}
  ${(props) => props.size === 'x' && bigSizeStyles}
  ${(props) => props.size === 'xl' && megaSizeStyles}
`;

export const HoverBackgroundButton = styled(BaseButton)`
  :hover {
    background-color: var(--grey-light-2);
  }
`;
export const WhiteBackgroundButton = styled(BaseButton)`
  background-color: var(--white);
  border: 1px solid var(--black-light-2);

  :hover {
    background-color: var(--grey-light-2);
  }
`;
