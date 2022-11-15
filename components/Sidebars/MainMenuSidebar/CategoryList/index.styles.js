import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--white);
  border-radius: var(--br-m);
  box-shadow: var(--bs-xs);
  display: flex;
  flex-direction: column;

  .heading {
    display: block;
    font-size: var(--fs-ss);
    font-weight: 100;
    color: var(--black-light-2);
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--grey-light-2);
  }

  .master_list {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
    padding: 1rem 2rem;
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
    display: block;
    padding: 1rem 2.5rem;
    transition: all 0.3s;
    cursor: pointer;
    :hover {
      background-color: var(--grey-light-2);
    }
  }

  .subCategory_item.active {
    color: var(--primary);
  }
`;
