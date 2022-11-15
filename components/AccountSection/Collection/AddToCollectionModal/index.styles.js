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

  width: 50rem;
  height: 50rem;
  padding: 3rem;
  border-radius: 2.4rem;
  background-color: var(--white);
  z-index: 2000;
  transition: all 0.3s;
  box-shadow: var(--bs-m);

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
`;

export const CollectionsContainer = styled.div`
  height: 30rem;
  overflow-y: auto;

  .addCollection {
    padding: 0.5rem;
    border-radius: var(--br-m);
    border: 2px solid transparent;
    cursor: pointer;
    width: 100%;
    background-color: var(--white);

    display: flex;

    gap: 1.5rem;
    align-items: center;

    :hover {
      border: 2px solid var(--black-light-3);
    }
  }

  .placeHolder {
    height: 5rem;
    width: 10rem;
    background-color: var(--black);
    border-radius: var(--br-m);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .name {
    font-size: var(--fs);
  }
`;

export const CollectionWrapper = styled.div`
  padding: 0.5rem;
  border-radius: var(--br-m);
  border: 2px solid transparent;
  cursor: pointer;

  display: flex;

  gap: 1.5rem;
  align-items: center;

  :hover {
    border: 2px solid var(--black-light-3);
  }

  .placeHolder {
    height: 5rem;
    width: 10rem;
    background-color: var(--black-light-3);
    border-radius: var(--br-m);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .name {
    font-size: var(--fs-s);
    font-weight: 500;
  }

  .items {
    font-size: var(--fs-ss);
    font-weight: 100;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const UpdateLoaderContainer = styled.div`
  height: 10rem;
  width: 100%;
`;
