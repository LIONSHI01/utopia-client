import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  border: 1px solid var(--black);
  border-radius: var(--br-m);
  background-color: var(--white);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :active {
    scale: 0.85;
  }
  :hover {
    box-shadow: var(--bs-s);
  }

  .meta_mask_icon {
    position: relative;
    height: 4rem;
    width: 20rem;
  }
`;
