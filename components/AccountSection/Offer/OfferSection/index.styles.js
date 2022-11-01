import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 100%;

  .heading {
    font-size: var(--fs-xl);
    font-weight: 500;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid var(--black-light-3);
`;

export const OrderPreviewItem = styled.div``;
