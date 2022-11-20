import styled, { css } from 'styled-components';

const showUpStyles = css`
  width: 23rem;

  height: 34rem;
  opacity: 1;
  visibility: visible;
`;

const contentsShowUpStyles = css`
  opacity: 1;
  visibility: visible;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-75%, 105%);

  width: 0rem;
  height: 0rem;
  padding: 2rem 0;

  border-radius: var(--br-m);
  box-shadow: var(--bs-s);
  background-color: ${({ theme }) => theme.dropdownBG};
  z-index: 1000;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${(props) => props.showUp && showUpStyles}

  /* ::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  } */

  .userInfo {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    font-family: inherit;

    :hover {
      background-color: ${({ theme }) => theme.dropdownHover};
    }

    span {
      color: ${({ theme }) => theme.textDark};
      text-transform: capitalize;
      font-size: 1.6rem;
    }
  }

  .info-box {
    display: flex;
    flex-direction: column;

    p {
      font-size: var(--fs-ss);
      font-weight: 400;
    }
  }

  .navigation-items {
    margin-bottom: 1.5rem;
  }

  .signout-btn,
  .list-item {
    padding: 0.8rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--fs-ss);
    font-weight: 400;
    color: ${({ theme }) => theme.textDark};
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.dropdownHover};
    }
  }

  .signout-btn {
    cursor: pointer;
    font-size: var(--fs-ss) !important;
    color: ${({ theme }) => theme.textDark} !important;
  }
`;

export const ContentWrapper = styled.div`
  /* overflow: hidden; */
  min-width: 20rem;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showUp && contentsShowUpStyles}
`;
