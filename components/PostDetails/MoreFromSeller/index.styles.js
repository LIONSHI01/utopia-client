import styled from 'styled-components';

export const BoxContainer = styled.div`
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: var(--fs-xxl);
      font-weight: 300;
      line-height: 0;
    }
  }

  .seller-posts {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
`;
