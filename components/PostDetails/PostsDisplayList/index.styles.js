import styled from 'styled-components';

export const BoxContainer = styled.div`
  margin-bottom: var(--mg-x);
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: var(--fs-xxl);
      font-weight: 300;
      margin-bottom: var(--mg-m);
    }
  }

  .seller-posts {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
