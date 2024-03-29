import styled from 'styled-components';

export const DisplaySection = styled.div`
  margin: 5rem 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);

  .title {
    display: flex;
    align-items: center;
    gap: 2rem;

    h3 {
      font-size: var(--fs-xl);
      font-weight: 500;
      line-height: 0;
    }
  }

  .items-count {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-s);
    color: ${({ theme }) => theme.textLight2};
    font-weight: 500;
  }
`;

export const ItemsListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
  justify-items: center;
  gap: 3rem;
  margin: 0 auto;

  .empty_reminder {
    margin: 0 auto;
    font-size: 2.8rem;
  }
`;
