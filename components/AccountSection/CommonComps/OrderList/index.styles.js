import styled from 'styled-components';
import { device } from '../../../../styles/devices';

export const ListContainer = styled.div`
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);
  border-bottom: 1px solid ${({ theme }) => theme.textLight3};
  padding-bottom: 1rem;
`;

export const SelectionContainer = styled.div`
  display: flex;
  gap: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.dropdownHover};
  height: 3rem;
  margin-bottom: var(--mg-m);

  .status_item {
    height: 100%;
    font-size: var(--fs);
    text-transform: capitalize;
    font-weight: 100;
    color: ${({ theme }) => theme.textLight2};

    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .selected {
    color: ${({ theme }) => theme.textDark};
    border-bottom: 2px solid var(--primary);
  }
`;

export const ListTable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 100;
`;

export const TableHeader = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  font-weight: 400;
  border-bottom: 1px solid ${({ theme }) => theme.textLight3};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--fs-s);

  @media ${device.laptop} {
    font-size: var(--fs-sss);
  }
`;

export const ListItemWrapper = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: 100;
  gap: 1rem;
  color: ${({ theme }) => theme.textLight2};
  text-transform: capitalize;
  font-size: var(--fs-ss);
  padding: 0.5rem 0;
  border-radius: var(--br-s);
  cursor: pointer;

  @media ${device.laptop} {
    font-size: var(--fs-sss);
  }

  :hover {
    background-color: var(--grey-light-2);
    color: var(--black);
  }

  .order_id {
    padding-left: 1rem;
  }
  .order_active {
    color: var(--green);
    font-weight: 400;
  }
  .order_inactive {
    color: ${({ theme }) => theme.textLight2};
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
