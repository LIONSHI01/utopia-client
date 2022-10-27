import styled from 'styled-components';

export const SectionContainer = styled.div`
  .heading {
    font-size: var(--fs-xl);
  }

  .order-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

  .copy-icon {
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
`;
