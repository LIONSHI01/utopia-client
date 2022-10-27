import styled from 'styled-components';

export const ItemWrapper = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--black-light-2);
  /* background-color: orangered; */
  border-radius: var(--br-m);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;

  :hover {
    outline: 2px solid var(--black-light-3);
    outline-offset: 5px;
  }

  padding: 1rem;

  .post-image {
    overflow: hidden;
    position: relative;
    width: 22rem;
    height: 22rem;
    background-color: var(--white);
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--black-light-2);
  }

  .title {
    font-size: var(--fs-s);
    font-weight: 400;
    /* color: var(--black-light-2); */
  }
  .since {
    font-size: var(--fs-ss);
  }
  .status {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-size: var(--fs-ss);
    }
  }
`;
