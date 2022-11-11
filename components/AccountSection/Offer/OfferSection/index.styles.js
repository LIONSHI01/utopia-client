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

// export const EmptyOfferWrapper = styled.div`
//   height: 100%;

//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;

//   p {
//     font-size: var(--fs-xl);
//     font-style: italic;
//   }
// `;
