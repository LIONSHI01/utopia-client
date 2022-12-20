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



  width: 40rem;
  min-height: 30rem;

  border-radius: var(--br-x);
  box-shadow: var(--bs-m);

  padding: 3rem;
  background-color: ${({ theme }) => theme.dropdownBG};
  z-index: 2000;
  transition: all 0.3s ease-in-out 0.1s;

  opacity: 0;
  visibility: hidden; */

  display: flex;
  flex-direction: column;

  ${(props) => props.showup && showUpStyles}

  .goback_btn {
    align-self: center;
  }
`;

export const MessageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--mg-m);

  h3 {
    font-size: var(--fs-xl);
    color: ${({ theme }) => theme.textDark};
    margin-bottom: var(--mg-s);
  }
  p {
    font-size: var(--fs);
    font-weight: 100;
    margin-bottom: var(--mg-m);
    line-height: 1.4;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: auto;
  border-bottom: 1px solid var(--black-light-3);
  padding-bottom: var(--mg-m);
  margin-bottom: var(--mg-s);
`;
