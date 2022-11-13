import styled, { css } from 'styled-components';

const openSubCategoryListStyles = css``;

const arrowActiveStyles = css`
  transform: rotate(90deg);
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50rem;
  background-color: var(--white);
  box-shadow: var(--bs-s);
  z-index: 2000;
  padding: 2rem;
  font-size: var(--fs-s);
  text-transform: capitalize;
  overflow-y: scroll;
`;

export const ListContainer = styled.div`
  .master_list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .arrow {
    cursor: pointer;
    transition: all 0.3s;
  }

  .category_list {
    display: flex;
    flex-direction: column;
    color: var(--black-light-2);
    transition: all 0.3s;
  }

  /* CATEGORY SELECTED EFFECT */

  .category_list.active .arrow {
    rotate: 90deg;
  }

  .category_list.active .category_item {
    background-color: var(--grey-light-2);

    a {
      color: var(--primary);
    }
  }

  .category_list.active .subCategory_list {
    display: flex;
  }

  .category_item {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: var(--br-s);
    cursor: pointer;

    :hover {
      background-color: var(--grey-light-2);
    }

    a {
      margin-right: auto;
    }
  }

  .subCategory_list {
    display: none;
    flex-direction: column;
    transition: all 0.3s;
  }

  .subCategory_item {
    padding: 0.5rem 2.5rem;
    border-radius: var(--br-s);
    cursor: pointer;
    :hover {
      background-color: var(--grey-light-2);
    }
  }
`;
