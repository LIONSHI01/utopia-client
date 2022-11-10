import styled from 'styled-components';

export const CommentSectionContainer = styled.div`
  .comment_wrapper {
    position: relative;
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }
  .comment_user {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .username {
    font-size: var(--fs-ss);
    font-weight: 500;
  }

  .comment_details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .upper_row {
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    span {
      font-size: var(--fs-ss);
    }
  }

  .order_comment_content {
    font-size: var(--fs-s);
    font-weight: 100;
  }

  .edit_button {
    position: absolute;
    top: 0;
    right: 0;
  }

  .heading {
    font-size: var(--fs-s);
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 105%);
  width: 8rem;
  /* height: 10rem; */

  background-color: var(--white);
  padding: 0.5rem;
  border-radius: var(--br-m);
  box-shadow: var(--bs-s);

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  li {
    cursor: pointer;
    font-size: var(--fs-s);
    padding: 0.4rem;
    border-radius: var(--br-s);

    :hover {
      background-color: var(--grey-light-1);
    }
  }
`;
