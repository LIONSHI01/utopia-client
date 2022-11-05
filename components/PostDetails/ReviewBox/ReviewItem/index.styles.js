import styled, { css } from 'styled-components';

export const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--black-light-2);
  .rating {
  }

  .contents {
    font-size: var(--fs-s);

    font-weight: 100;
  }
`;
export const PostedByInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: var(--fs-ss);
  .username {
    text-decoration: underline;

    :hover {
      text-decoration: none;
      color: var(--black);
    }
  }

  .publish_date {
  }
`;
