import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textDark};
  border-radius: var(--br-m);
  background-color: ${({ theme }) => theme.dropdownBG};
  padding: 2.5rem;
  box-shadow: var(--bs-s);

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
  }

  .info_box {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.textLight3};
    padding-bottom: 1rem;
    margin-bottom: var(--mg-s);
    gap: 1rem;
    font-size: var(--fs-ss);
  }

  .userInfo_top {
    display: flex;
    align-items: center;
    gap: 1rem;
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

    border-bottom: 1px solid ${({ theme }) => theme.textLight3};
    padding-bottom: 2rem;

    p {
      font-size: var(--fs-s);
    }
  }

  .shippingAddress_heading {
    display: block;
    font-size: var(--fs-ss);

    font-weight: 400;
    color: ${({ theme }) => theme.textLight2};
    margin-bottom: var(--mg-s);
  }

  p {
    color: ${({ theme }) => theme.textLight2};
    font-weight: 100;
  }

  .join_since,
  .location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.textLight2};
  }

  .follow_info {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.textLight2};
  }

  .social_links {
    display: flex;
    gap: 1rem;

    a {
      display: block;
      cursor: pointer;

      :hover {
        color: ${({ theme }) => theme.textPrimary};
  }
      }
    }
  }

  .bio {
    font-size: var(--fs-ss);
    color: ${({ theme }) => theme.textLight2};
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
    color: ${({ theme }) => theme.textLight2};
  }

  .sales_reviews {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
