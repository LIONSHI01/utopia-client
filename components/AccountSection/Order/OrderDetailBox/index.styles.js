import styled from 'styled-components';

export const DetailsBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 100%;
  gap: 2rem;
`;

export const LeftContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 1.5rem;

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
  }
  .userInfo_top {
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 2rem;
  }

  .username {
    font-size: var(--fs-s);
    font-weight: 400;
  }
  .shippingAddress {
    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 2rem;
  }
`;

export const TransactionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 1.5rem;
  font-size: var(--fs-s);
  font-weight: 100;
  height: 100%;

  & > * {
    display: flex;
    gap: 2rem;
  }

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
    color: var(--black);
  }

  .details_box {
    display: grid;
    grid-template-columns: 2fr 8fr;
  }
  .title_col {
  }

  .content_col {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon {
    cursor: pointer;
  }

  .validation {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    /* font-weight: 500; */
    color: var(--red);
  }

  .completedStatus {
    color: var(--green);
  }
`;

export const EditTxHashBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .edit-buttons {
    display: flex;
    gap: 1rem;
    align-self: flex-end;
  }
`;
