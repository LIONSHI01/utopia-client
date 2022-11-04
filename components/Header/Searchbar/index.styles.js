import styled from 'styled-components';

export const SearchbarWrapper = styled.div`
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

  .search-btn {
    background-color: var(--black);
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    :hover {
      background-color: var(--primary);
    }
  }
`;
