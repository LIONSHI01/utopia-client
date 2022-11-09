import styled from 'styled-components';

export const DetailsBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1.25fr;
  height: 100%;
  gap: 2rem;
`;

export const LeftContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TransactionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 2.5rem;
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
    gap: 0.5rem;
    text-transform: capitalize;
    font-style: italic;
    color: var(--red);
  }

  .completedStatus {
    color: var(--green);
  }

  .seller_claim_record {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      text-decoration: underline;
      :hover {
        color: var(--primary);
      }
    }
  }

  .seller_claim_btn {
    align-self: flex-end;
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.8rem;
      color: var(--primary);
    }
  }

  .seller_claim_date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
