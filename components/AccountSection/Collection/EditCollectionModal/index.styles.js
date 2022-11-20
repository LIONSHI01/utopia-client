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
  padding: 3rem;
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.dropdownBG};
  z-index: 2000;
  transition: all 0.3s;
  box-shadow: var(--bs-m);
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textDark};

  /* Hide before activate */
  opacity: 0;
  visibility: hidden;

  ${(props) => props.showUp && showUpStyles}

  .heading {
    margin-bottom: var(--mg-m);

    h3 {
      font-size: var(--fs-xxl);
      font-weight: 100;
      text-align: center;
      margin-bottom: var(--mg-s);
      color: ${({ theme }) => theme.textDark};
    }
  }

  .regular_text {
    font-size: var(--fs-s);
    color: ${({ theme }) => theme.textDark};
    margin-bottom: var(--mg-s);
  }

  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .buttons-group {
    width: 100%;
    display: flex;
    gap: 1rem;
    height: 5rem;
    margin-top: var(--mg-x);
    align-self: flex-end;
  }

  .delete-btn {
    display: flex;
    align-items: center;
    justify-self: flex-start;
    gap: 0.5rem;
    border: none;

    color: ${({ theme }) => theme.textDark};
    border-radius: var(--br-m);
    transition: all 0.3s;
    font-size: var(--fs-s);
    height: 100%;
    background-color: transparent;
    margin-right: auto;

    cursor: pointer;

    :active {
      scale: 0.85;
    }

    :hover {
      background-color: ${({ theme }) => theme.textLight3};
      color: var(--black);
    }
  }
`;
