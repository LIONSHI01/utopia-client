import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

const hideEmailFormStyles = css`
  visibility: hidden;
  opacity: 0;
  transform: translateY(100%);
  display: none;
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  width: 40rem;
  padding: 3rem 3rem 0rem 3rem;
  background-color: var(--white);
  border-radius: var(--br-m);
  z-index: 2000;
  transition: all 0.3s ease-in-out;

  /* Hide before activate */
  visibility: hidden;
  opacity: 0;

  ${(props) => props.showUp && showUpStyles}

  .heading {
    margin-bottom: var(--mg-m);
    h2 {
      font-size: var(--fs-xl);
      font-weight: 500;
      color: var(--black-light-2);
      text-align: center;
    }
  }

  .switch-box {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--fs-s);
    color: var(--black-light-2);
    font-weight: 100;
  }
`;

export const EmailFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease-in-out;
  opacity: 1;

  ${(props) => props.showup && hideEmailFormStyles}

  & > :last-child {
    margin-bottom: var(--mg-s);
  }

  .or_text {
    position: relative;
    text-align: center;
    z-index: 10;
    font-weight: 400;
    font-size: var(--fs);

    ::after,
    ::before {
      content: '';
      position: absolute;
    }

    ::after {
      top: 50%;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--black-light-3);
      z-index: -10;
    }

    ::before {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      width: 4rem;
      background-color: var(--white);
      z-index: -1;
      border-radius: var(--br-m);
    }
  }
  .input-field {
    border: 1px solid var(--black-light-3);
    border-radius: var(--br-s);
    padding: 1rem;
    font-size: var(--fs-s);
    color: var(--black-light-2);
    font-family: inherit;

    ::placeholder {
      color: var(--black-light-3);
      font-family: inherit;
    }

    :hover {
      border: 1px solid var(--black);
    }
    :focus {
      outline: none;
      border: 1px solid var(--black);
    }
  }

  .forget {
    display: flex;
    justify-content: end;
    width: 100%;

    button {
      border: none;
      background-color: transparent;
      font-size: var(--fs-s);
      font-weight: 100;
      color: var(--black-light-2);
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const MetaMaskFormBox = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 100;
  font-size: var(--fs);
  width: 100%;
  gap: 2rem;

  p {
    font-size: var(--fs-s);
    text-align: center;
    color: var(--primary);
    margin-top: 0.5rem;
  }

  .web3_login_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.5rem;
    width: 100%;
    border: 1px solid var(--black);
    border-radius: var(--br-m);
    background-color: var(--white);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :active {
      scale: 0.85;
    }
    :hover {
      box-shadow: var(--bs-s);
    }
  }
  .meta_mask_icon {
    position: relative;
    height: 4rem;
    width: 20rem;
  }

  .selectedBox {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 1px solid var(--black-light-3);
    border-radius: var(--br-m);
    align-items: center;
    gap: 1rem;
  }

  .wallet_connected_box {
    display: flex;
    gap: 1rem;
  }

  .walletAddress {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    background-color: var(--white);
    border: 2px solid var(--black);
    border-radius: var(--br-m);

    span {
      word-break: break-all;
      font-size: var(--fs-s);
      font-weight: 500;
    }
  }

  .wallet_switch_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: var(--white);
    color: var(--black);
    border-radius: var(--br-m);
    transition: all 0.3s;
    border: 2px solid var(--black);
    height: 4rem;
    width: 4rem;

    cursor: pointer;

    :active {
      scale: 0.85;
    }

    :hover {
      background-color: var(--grey-light-2);
      box-shadow: var(--bs-s);
    }
  }

  .goback_btn {
    position: absolute;
    top: 2.5rem;
    left: 2rem;
  }
`;
