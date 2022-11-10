import styled from 'styled-components';

export const CommentBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .heading {
    font-size: var(--fs-s);
    font-weight: 500;
  }
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .buttons-group {
    align-self: flex-end;
    display: flex;
    gap: 1rem;
    margin-top: var(--mg-s);
  }
`;
