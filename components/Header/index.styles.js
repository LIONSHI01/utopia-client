import styled, { css } from 'styled-components';

const stickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--bs-s);
  z-index: 1000;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  /* height: 7rem; */
  width: 100%;
  ${(props) => props.sticky && stickyStyles}
`;

export const HeaderWrapper = styled.div`
  height: 7rem;
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  background-color: var(--white);

  .logo {
    margin-right: 5rem;
    display: flex;
    align-items: center;

    h2 {
      line-height: 0;
      font-family: var(--ff-display);
      font-size: 3.2rem;
    }
  }

  .searchBar {
    height: 4rem;
    min-width: 50%;
    max-width: 65%;

    display: flex;
    align-items: center;

    border-radius: var(--br-s);
    border: 1px solid var(--black);
    overflow: hidden;
    transition: all 0.3s;
    margin-right: 3rem;

    :has(input:focus) {
      box-shadow: 0 0 0 0.3rem #ff9a77;
    }

    input {
      width: 100%;
      height: 4rem;
      border: none;
      font-size: var(--fs);
      padding: 1rem;

      ::placeholder {
        font-size: var(--fs-s);
      }

      :focus {
        outline: none;
      }
    }
  }

  .search-btn {
    background-color: var(--black);
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  .links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    margin-left: auto;

    span {
      font-size: var(--fs);
      color: var(--black-light-2);
    }
  }

  .auth-buttons {
    display: flex;
    gap: 1rem;
  }

  .notification {
    position: relative;
    border-radius: 100px;
    cursor: pointer;
  }

  .noti-number {
    position: absolute;
    top: -0.5rem;
    right: -1rem;
    background-color: red;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;

    span {
      color: var(--white);
      line-height: 0;
      font-size: var(--fs-sss);
    }
  }
`;

export const StickyFillinSpace = styled.div`
  height: ${(props) => (props.sticky ? '11rem' : 0)};
`;
