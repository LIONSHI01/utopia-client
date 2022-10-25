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
    transition: all 0.2s ease-in-out;

    :hover {
      outline: 2px solid var(--black-light-3);
      outline-offset: 4px;
    }
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
