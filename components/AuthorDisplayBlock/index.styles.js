import styled from 'styled-components';
// import { device } from "../../styles/devices";

export const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;

  color: var(--white);

  .social-links {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  .icon-box {
    height: 2.2rem;
    width: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    svg {
      height: 2rem;
      width: 2rem;
      color: var(--white);
    }
  }
`;
