import styled, { css } from 'styled-components';

export const AccountControlWrapper = styled.div`
  p,
  li {
    font-size: var(--fs-s);
    color: var(--black-light-2);
    letter-spacing: 0.5px;
  }

  .heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black-light-3);
    margin-bottom: var(--mg-m);
  }

  .contents {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: var(--mg-m);
    .reminder {
      margin-top: var(--mg-m);
    }
    p {
      font-size: var(--fs);
      font-weight: 500;
      color: var(--black);
    }
    ul {
      list-style: inside;
    }
  }
`;

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  display: flex;
  flex-direction: column;

  min-width: 20rem;
  max-width: 60rem;
  min-height: 30rem;
  /* max-height: 60rem; */

  border-radius: var(--br-x);
  box-shadow: var(--bs-m);

  padding: 3rem;
  background-color: var(--white);
  z-index: 2000;
  transition: all 0.3s ease-in-out 0.1s;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showup && showUpStyles}
`;

export const ModalMessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: var(--fs-xl);
    color: var(--black);
  }

  p {
    font-size: var(--fs);
    font-weight: 100;
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: auto;
`;
