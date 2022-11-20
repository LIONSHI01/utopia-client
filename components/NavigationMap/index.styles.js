import styled from 'styled-components';

export const MapWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 100;
  color: ${({ theme }) => theme.textLight2};

  padding: 2rem 0;

  .links {
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;
  }

  .post-title {
    color: ${({ theme }) => theme.textDark};
  }

  a {
    :hover {
      ${({ theme }) => theme.textDark};
      text-decoration: underline;
    }
  }
`;
