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
  transform: translate(-45%, 35%);

  background-color: ${({ theme }) => theme.dropdownBG};
  padding: 1rem;
  border-radius: var(--br-x);
  box-shadow: var(--bs-m);
  z-index: 100;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showup && boxShowUpStyles}
`;

export const ContentWrapper = styled.div`
  visibility: hidden;
  opacity: 0;

  .list-item {
    font-size: var(--fs-s);
    border-radius: var(--br-s);
    padding: 1rem;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.dropdownHover};
    }
  }

  ${(props) => props.showup && contentShowUpStyles}
`;
