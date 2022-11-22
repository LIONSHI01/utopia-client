import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.dropdownBG};
  border-radius: var(--br-m);
  box-shadow: var(--bs-xs);
  display: flex;
  flex-direction: column;

  .heading {
    display: block;
    font-size: var(--fs-ss);
    font-weight: 100;
    color: ${({ theme }) => theme.textLight3};
    padding: 1rem 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .master_list {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    & > *:last-child {
      border-bottom-left-radius: var(--br-m);
      border-bottom-right-radius: var(--br-m);
      overflow: hidden;
    }
  }

  .arrow {
    cursor: pointer;
    transition: all 0.3s;
  }

  .category_list {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.textLight2};
    transition: all 0.3s;
  }

  /* CATEGORY SELECTED EFFECT */

  .category_list.active .arrow {
    rotate: 90deg;
  }

  .category_list.active .category_item {
    background-color: ${({ theme }) => theme.dropdownHover};

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
      background-color: ${({ theme }) => theme.dropdownHover};
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
      background-color: ${({ theme }) => theme.dropdownHover};
    }
  }

  .subCategory_item.active {
    color: var(--primary);
  }
`;
