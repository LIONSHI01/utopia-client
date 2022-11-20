import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  /* min-height: 100vh; */
  width: 100%;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;

  .heading {
    font-size: var(--fs-xl);
    font-weight: 500;
  }
`;
