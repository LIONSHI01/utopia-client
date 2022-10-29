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

  .status,
  .validation {
    font-weight: 500;
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
