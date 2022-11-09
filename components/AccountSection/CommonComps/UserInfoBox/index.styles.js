import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 2.5rem;

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
  }

  .info_box {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 1rem;
    margin-bottom: var(--mg-s);
    gap: 1rem;
    font-size: var(--fs-ss);
  }

  .userInfo_top {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* margin-bottom: var(--mg-s); */
  }

  .userInfo_top_details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .username {
    font-size: var(--fs-s);
    font-weight: 400;

    :hover {
      text-decoration: underline;
    }
  }

  .shippingAddress {
    display: flex;
    flex-direction: column;

    border-bottom: 1px solid var(--black-light-3);
    padding-bottom: 2rem;

    p {
      font-size: var(--fs-s);
    }
  }

  .shippingAddress_heading {
    display: block;
    font-size: var(--fs-ss);

    font-weight: 400;
    color: var(--black-light-2);
    margin-bottom: var(--mg-s);
  }

  p {
    color: var(--black-light-2);
    font-weight: 100;
  }

  .join_since,
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--black-light-2);
  }

  .follow_info {
    display: flex;
    gap: 1rem;
    color: var(--black-light-2);
  }

  .social_links {
    display: flex;
    gap: 1rem;

    a {
      display: block;
      cursor: pointer;

      :hover {
        color: var(--black);
      }
    }
  }

  .bio {
    font-size: var(--fs-ss);
    color: var(--black-light-2);
  }

  .bio_heading {
    line-height: 0;
    font-size: var(--fs-s);
    font-weight: 400;
  }

  .email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--black-light-2);
  }

  .sales_reviews {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
