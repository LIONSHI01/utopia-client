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
    /* display: block;
    align-items: center;
    justify-content: center; */

    position: relative;
    height: 12rem;
    width: 12rem;
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

  .placeholder_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    width: 12rem;
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
  .placeholder_icon {
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

export const ImageGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .grid_item_container {
    position: relative;
    height: 6rem;
    border: 2px solid var(--white);
    /* width: 5rem; */
  }
`;
