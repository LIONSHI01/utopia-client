import styled from 'styled-components';

export const EmptyItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  .empty_listing_reminder {
    margin: 0 auto;
    font-size: ${(props) => props.fontSize};
    font-style: italic;
  }
`;
