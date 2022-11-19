import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  label {
    font-size: var(--fs-s);
    color: var(--black);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    border-radius: var(--br-s);
    border: none;
    color: var(--black-light-2);
    font-size: var(--fs-s);
    outline: none;
    font-family: inherit;
    border: 1px solid var(--black-light-3);
    padding: 1rem;
    transition: all 0.3s;
    box-shadow: inset 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.05);

    ::placeholder {
      font-size: var(--fs-s);
      font-family: inherit;
      color: var(--black-light-3);
      font-weight: 100;
    }

    :focus {
      border: 1px solid var(--black);
      box-shadow: 0 0 0 0.4rem var(--primary-light-2);
    }

    :hover {
      border: 1px solid var(--black);
    }
  }

  textarea {
    resize: vertical;
  }

  .pw_input_filed {
    position: relative;
  }

  .pw_icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
  }
`;
