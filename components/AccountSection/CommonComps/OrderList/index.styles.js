import styled from 'styled-components';

export const ListContainer = styled.div`
  height: 20rem;

  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);
`;

export const SelectionContainer = styled.div`
  display: flex;
  gap: 4rem;
  border-bottom: 1px solid var(--black-light-3);
  height: 3rem;
  margin-bottom: var(--mg-m);

  .status_item {
    height: 100%;
    font-size: var(--fs);
    text-transform: capitalize;
    font-weight: 100;
    color: var(--black-light-2);

    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .selected {
    color: var(--black);
    border-bottom: 2px solid var(--primary);
  }
`;

export const ListTable = styled.div`
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 100;
`;

export const TableHeader = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 400;
  border-bottom: 1px solid var(--black-light-3);
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  text-transform: capitalize;
  font-size: var(--fs-s);
`;

export const ListItemWrapper = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 100;
  color: var(--black-light-2);
  text-transform: capitalize;
  font-size: var(--fs-ss);
  padding: 0.5rem 0;
  border-radius: var(--br-s);
  cursor: pointer;

  :hover {
    background-color: var(--grey-light-1);
  }

  .order_id {
    padding-left: 1rem;
  }
  .order_active {
    color: var(--green);
    font-weight: 400;
  }
  .order_inactive {
    color: var(--black-light-2);
    font-weight: 400;
  }

  .order_activity {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-weight: 400;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: auto;
`;