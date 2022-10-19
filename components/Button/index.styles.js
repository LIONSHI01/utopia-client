import styled, { css } from 'styled-components';

const mediumSizeStyles = css`
  padding: 0.2rem 1rem;
`;
const fullSizeStyles = css`
  width: 100%;
`;

export const BaseButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  border-radius: var(--br-m);

  cursor: pointer;

  :hover {
    background-color: var(--primary-dark);
  }

  ${(props) => props.size === 'm' && mediumSizeStyles}
  ${(props) => props.size === 'full' && fullSizeStyles}
`;

export const OutlineRedButton = styled(BaseButton)`
  background-color: var(--white);
  border: 2px solid var(--primary);
  color: var(--black);

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const OutlineGreyButton = styled(BaseButton)`
  background-color: var(--white);
  border: 1px solid var(--black-light-3);
  color: var(--black);

  :hover {
    border: 1px solid var(--black);
    background-color: transparent;
    /* color: var(--black); */
  }
`;
