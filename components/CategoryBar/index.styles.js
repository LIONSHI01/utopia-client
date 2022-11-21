import styled from 'styled-components';

export const BarWrapper = styled.div`
  width: 100%;
  height: 4rem;
  /* border-top: 1px solid ${({ theme }) => theme.textLight3}; */
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 0 5rem;
  display: flex;
  justify-content: space-evenly;
`;
