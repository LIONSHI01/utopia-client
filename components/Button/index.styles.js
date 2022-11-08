import styled, { css } from 'styled-components';

const mediumSizeStyles = css`
  padding: 0.2rem 1rem;
`;

const largeSizeStyles = css`
  padding: 0.8rem 1.6rem;
  font-size: var(--fs);
`;

const fullSizeStyles = css`
  width: 100%;
  height: 100%;
`;

export const BaseButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  border-radius: var(--br-m);
  transition: all 0.3s;
  font-size: var(--fs-s);

  cursor: pointer;

  :active {
    scale: 0.85;
  }

  :hover {
    background-color: var(--primary-dark);
  }

  ${(props) => props.size === 'm' && mediumSizeStyles}
  ${(props) => props.size === 'x' && largeSizeStyles}
  ${(props) => props.size === 'full' && fullSizeStyles}



  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const OutlineRedButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--primary)' : 'var(--white)'};
  border: 1px solid var(--primary);
  color: var(--black);

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }
`;

export const OutlineGreyButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--black)' : 'var(--white)'};
  border: 1px solid var(--black-light-3);
  color: var(--black);

  :hover {
    border: 1px solid var(--black);
    background-color: transparent;
  }
`;
export const RawButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--primary)' : 'transparent'};
  color: var(--primary);

  :hover {
    text-decoration: underline;
    background-color: unset;
  }
`;
