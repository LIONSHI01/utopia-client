import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    font-size: var(--fs);
    margin-bottom: var(--mg-s);
  }

  .seller-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .seller-image {
    position: relative;
    height: 10rem;
    width: 10rem;
    border-radius: 100px;
    overflow: hidden;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: var(--fs);
    margin-bottom: var(--mg-s);
  }
  .details {
    display: flex;
  }
  .rating {
  }
  .reviews {
  }
  .lists {
  }
  .sales {
  }
`;
