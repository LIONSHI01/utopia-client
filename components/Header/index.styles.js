import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 7rem;
  width: 100%;
  /* background-color: var(--white); */
  /* background-color: orangered; */
  padding: 1rem 5rem;
  display: flex;
  align-items: center;

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
      box-shadow: 0 0 0 0.3rem rgba(0, 0, 0, 0.5);
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
`;
