import styled, { css } from 'styled-components';

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

export const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: var(--fs-xl);
    color: var(--black);
    margin-bottom: var(--mg-m);
  }
  p {
    font-size: var(--fs);
    font-weight: 100;
  }

  a {
    margin-top: var(--mg-m);
    font-size: var(--fs);
    text-decoration: underline;
    :hover {
      color: var(--primary);
    }
  }
`;
export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  margin-top: auto;
`;

export const SpinnerContainer = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
