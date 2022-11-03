import styled from 'styled-components';

export const AuthenticationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black-light-3);
    margin-bottom: var(--mg-m);
  }
`;
