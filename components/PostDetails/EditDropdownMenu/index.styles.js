import styled, { css } from 'styled-components';

const boxShowUpStyles = css`
  visibility: visible;
  opacity: 1;
`;

const contentShowUpStyles = css`
  visibility: visible;
  opacity: 1;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  transform: translate(-45%, 43%);

  background-color: var(--white);
  padding: 1rem;
  border-radius: var(--br-x);
  box-shadow: var(--bs-m);
  z-index: 100;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showup && boxShowUpStyles}

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 25px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  }
`;

export const ContentWrapper = styled.div`
  /* min-width: 10rem; */
  /* min-height: 20rem; */
  visibility: hidden;
  opacity: 0;

  .list-item {
    font-size: var(--fs-s);
    border-radius: var(--br-s);
    padding: 1rem;
    cursor: pointer;

    :hover {
      background-color: var(--black-light-3);
    }
  }

  ${(props) => props.showup && contentShowUpStyles}
`;
