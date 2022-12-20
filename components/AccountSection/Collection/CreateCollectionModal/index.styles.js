import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

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
    justify-content: space-between;
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
