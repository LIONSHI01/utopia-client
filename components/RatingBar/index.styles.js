import styled from 'styled-components';

export const BarContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  .star {
    color: var(--black-light-3);

    :hover {
      color: var(--yellow);
    }
  }

  .star.active {
    color: var(--yellow);
  }

  .rating_text {
    font-size: var(--fs);
    text-transform: capitalize;
    /* font-style: italic; */
  }
`;
