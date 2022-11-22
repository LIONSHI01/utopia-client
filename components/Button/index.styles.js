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

const disableStyles = css`
  border: 1px solid var(--black-light-3);
  color: var(--black-light-2);
  pointer-events: none;
  background-color: var(--black-light-3);
`;

export const BaseButton = styled.button`
  border: none;
  background-color: var(--primary);
  color: var(--white);
  border-radius: var(--br-m);
  transition: all 0.3s;
  font-size: ${(props) => props.fonsSize};
  font-family: inherit;

  cursor: pointer;

  :active {
    scale: 0.85;
  }

  :hover {
    background-color: var(--primary-dark);
    box-shadow: var(--bs-s);
  }

  ${(props) => props.size === 'm' && mediumSizeStyles}
  ${(props) => props.size === 'x' && largeSizeStyles}
  ${(props) => props.size === 'full' && fullSizeStyles}
  ${(props) => props.disable && disableStyles}


  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const OutlineRedButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--primary)' : 'var(--transparent)'};
  border: 1px solid var(--primary);
  color: ${({ theme }) => theme.textDark};

  :hover {
    background-color: var(--primary);
    color: var(--white);
  }

  ${(props) => props.disable && disableStyles}
`;

export const OutlineGreyButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--black)' : 'transparent'};
  border: 1px solid ${({ theme }) => theme.textLight3};
  color: ${({ theme }) => theme.textDark};

  :hover {
    border: 1px solid ${({ theme }) => theme.textDark};
    background-color: transparent;
  }

  ${(props) => props.disable && disableStyles}
`;

export const RawButton = styled(BaseButton)`
  background-color: ${(props) =>
    props.showLoader ? 'var(--primary)' : 'transparent'};
  color: var(--primary);

  :hover {
    text-decoration: underline;
    background-color: unset;
    box-shadow: unset;
  }

  ${(props) => props.disable && disableStyles}
`;
export const BlackButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textDark};
  border: 1px solid ${({ theme }) => theme.textDark};

  :hover {
    background-color: ${({ theme }) => theme.textLight2};
  }

  ${(props) => props.disable && disableStyles}
`;

export const Web3Button = styled(BaseButton)`
  position: relative;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  position: relative;
  z-index: 0;

  ${(props) => props.disable && disableStyles}

  :before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }

  :after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => (props.disable ? 'var(--black-ligth-3)' : '#111')};
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
