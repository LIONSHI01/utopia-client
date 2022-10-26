import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  width: 40rem;
  padding: 3rem 5rem 0rem 5rem;
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

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-bottom: 1px solid var(--black-light-3);

    & > :last-child {
      margin-bottom: var(--mg-s);
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
      color: var(--black-light-2);
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
    /* padding-bottom: var(--mg-s); */
    /* background-color: orangered; */

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
