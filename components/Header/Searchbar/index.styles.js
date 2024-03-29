import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
  width: 100%;
  margin-right: 3rem;

  form {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: var(--br-s);
    border: 1px solid ${({ theme }) => theme.textDark};
    overflow: hidden;
    transition: all 0.3s;
    background-color: var(--white);
    padding: 0.1rem;

    :has(input:focus) {
      box-shadow: 0 0 0 0.3rem #ff9a77;
    }
  }

  input {
    width: 100%;
    height: 4rem;
    border: none;
    font-size: var(--fs);
    padding: 1rem;

    ::placeholder {
      font-size: var(--fs-s);
      color: var(--black-light-3);
    }

    :focus {
      outline: none;
    }
  }

  .search-btn {
    background-color: var(--black);
    width: 3.7rem;
    height: 3.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: var(--br-s);
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    :active {
      scale: 0.85;
    }

    :hover {
      background-color: var(--primary);
    }
  }
`;
