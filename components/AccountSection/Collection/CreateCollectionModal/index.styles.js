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

  width: 55rem;
  /* height: 40rem; */
  padding: 3rem;
  border-radius: 2.4rem;
  background-color: var(--white);
  z-index: 2000;
  transition: all 0.3s;
  box-shadow: var(--bs-m);
  display: flex;
  flex-direction: column;

  /* Hide before activate */
  opacity: 0;
  visibility: hidden;
  /* display: none; */

  ${(props) => props.showUp && showUpStyles}

  .heading {
    h3 {
      font-size: var(--fs-xxl);
      font-weight: 100;
      text-align: center;
      margin-bottom: var(--mg-m);
    }
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .buttons-group {
    display: flex;
    gap: 1rem;
    height: 5rem;
    margin-top: var(--mg-m);
    align-self: flex-end;
  }

  .text-countdown {
    font-size: 1rem;
    font-weight: 100;
  }
`;
