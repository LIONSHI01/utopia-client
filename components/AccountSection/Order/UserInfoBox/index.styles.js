import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 1.5rem;

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
  }

  .info_box {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 2rem;
  }

  .userInfo_top {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--mg-s);
  }

  .username {
    font-size: var(--fs-s);
    font-weight: 400;
  }
  .shippingAddress {
    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 2rem;
  }

  .follow_info {
    align-self: center;
    display: flex;
    gap: 1rem;
    color: var(--black-light-2);
  }

  .bio {
    color: var(--black-light-2);
  }

  .bio_heading {
    line-height: 0;
  }
`;
