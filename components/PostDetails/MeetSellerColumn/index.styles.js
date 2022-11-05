import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);
  border-bottom: 1px solid var(--grey-light-1);
  padding-bottom: 2.5rem;

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
    gap: 1rem;
    color: var(--black-light-2);
  }
  .item {
    display: flex;
    gap: 0.2rem;
    font-size: 1.3rem;
    font-weight: 100;
    span {
      font-weight: 500;
      color: var(--black);
    }
  }
  .buttons-group {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    align-self: flex-start;
    height: 3rem;
    width: 30rem;
  }
`;
