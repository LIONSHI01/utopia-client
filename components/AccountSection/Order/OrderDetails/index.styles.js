import styled from 'styled-components';

export const SectionContainer = styled.div`
  .heading {
    font-size: var(--fs-xl);
  }

  .order-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: var(--mg-m);
    padding-bottom: var(--mg-m);
    border-bottom: 1px solid var(--black-light-3);
  }

  .row {
    display: grid;
    grid-template-columns: 2.5fr 7.5fr;
    font-size: var(--fs-s);
    color: var(--black-light-2);
    font-weight: 100;
  }

  .title {
    color: var(--black);
    font-weight: 400;
  }

  .contents {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .buyer-confirmation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .confirmation-status {
    display: flex;
    gap: 1rem;
    color: var(--green);

    span {
      font-weight: 500;
    }
  }

  .order-value {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon-container {
    position: relative;
    height: 2rem;
    width: 2rem;
  }

  .value-wrapper {
    display: flex;
    align-items: flex-end;
    line-height: 0;
    gap: 1rem;
  }
  .item-value {
    font-size: 1.2rem;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    text-decoration: underline;
  }

  .validation {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    color: var(--red);
  }

  .completedStatus {
    color: var(--green);
  }

  .icon {
    cursor: pointer;
  }

  .detailsLink {
    text-decoration: underline;
    font-style: italic;
    font-size: var(--fs-ss);

    :hover {
      color: var(--primary);
    }
  }

  .buttons-group {
    display: flex;
    justify-content: space-between;
  }

  .edit-buttons {
    display: flex;
    gap: 2rem;
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
