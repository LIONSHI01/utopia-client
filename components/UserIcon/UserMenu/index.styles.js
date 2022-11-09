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
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-75%, 105%);

  width: 0rem;
  height: 0rem;
  padding: 2rem 0;

  border-radius: var(--br-m);
  box-shadow: var(--bs-s);
  background-color: var(--white);
  z-index: 1000;

  display: flex;
  flex-direction: column;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  }

  ${(props) => props.showUp && showUpStyles}

  .userInfo {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;

    :hover {
      background-color: var(--grey-light-1);
    }

    span {
      color: var(--black);
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
    color: var(--black);
    cursor: pointer;
    :hover {
      background-color: var(--grey-light-1);
    }
  }

  .signout-btn {
    cursor: pointer;
    font-size: var(--fs-ss) !important;
    color: var(--black) !important;
  }
`;

export const ContentWrapper = styled.div`
  /* overflow: hidden; */
  min-width: 20rem;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showUp && contentsShowUpStyles}
`;
