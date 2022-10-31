import styled, { css } from 'styled-components';

const showUpStyles = css`
  width: 20rem;
  height: 30rem;

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
  background-color: var(--white);
  z-index: 100;

  display: flex;
  flex-direction: column;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${(props) => props.showUp && showUpStyles}

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  }

  .userInfo {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;

    span {
      color: var(--black);
      text-transform: capitalize;
    }
  }

  .navigation-items {
    margin-bottom: 1.5rem;
  }

  .signout-btn,
  .list-item {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--fs-ss);
    font-weight: 100;
    color: var(--black);
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
  width: 100%;
  overflow: hidden;
`;
