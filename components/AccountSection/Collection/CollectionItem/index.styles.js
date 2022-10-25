import styled from 'styled-components';

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;

  :hover .outliner {
    opacity: 1;
    scale: 1.1;
  }

  .outliner {
    position: absolute;
    top: 0;
    left: 0;
    height: 10rem;
    width: 14rem;
    border-radius: 16px;
    border: 2px solid var(--black-light-3);
    scale: 0;

    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  .image-container {
    position: relative;
    height: 10rem;
    width: 14rem;
    align-items: center;
    justify-content: center;
    border-radius: var(--br-x);
    background-color: var(--black-light-3);
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--fs-ss);
    text-align: center;
    font-weight: 400;
  }

  .total-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: var(--fs-ss);
      font-weight: 100;
    }
  }
`;
