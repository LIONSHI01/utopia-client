import styled from 'styled-components';

export const EmptyItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  align-items: center;

  .empty_listing_reminder {
    margin: 0 auto;
    font-size: ${(props) => props.fontSize};
    font-style: italic;
  }
`;
