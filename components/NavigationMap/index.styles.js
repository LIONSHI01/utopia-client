import styled from 'styled-components';

export const MapWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 100;
  color: var(--black-light-2);
  /* background-color: orangered; */
  padding: 2rem 0;

  .links {
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;
  }

  .post-title {
    color: var(--black);
  }

  a {
    :hover {
      color: var(--black);
      text-decoration: underline;
    }
  }
`;
