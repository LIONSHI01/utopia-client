import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

export const ModalContainer = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  min-width: 20rem;
  max-width: 60rem;
  min-height: 30rem;

  border-radius: var(--br-x);
  box-shadow: var(--bs-m);

  padding: 3rem;
  background-color: ${({ theme }) => theme.dropdownBG};

  z-index: 2000;
  transition: all 0.3s ease-in-out 0.1s;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showup && showUpStyles} */

  display: flex;
  flex-direction: column;
`;

export const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;

  h3 {
    font-size: var(--fs-xl);
    color: ${({ theme }) => theme.textDark};
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
