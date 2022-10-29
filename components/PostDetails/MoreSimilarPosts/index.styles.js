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

  .similar-posts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
