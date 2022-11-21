import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 2rem;

  .post-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    color: var(--black-light-2);

    label {
      font-size: var(--fs-s);
      color: ${({ theme }) => theme.textLight2};
      margin-bottom: var(--mg-s);
    }

    select {
      appearance: none;
      cursor: pointer;
      background-color: var(--white);
      transition: all 0.3s;
    }

    select,
    input,
    textarea {
      width: 100%;
      border-radius: var(--br-s);
      border: none;
      color: var(--black-light-2);
      font-size: var(--fs-s);
      outline: none;
      font-family: inherit;

      ::placeholder {
        font-size: var(--fs-s);
        font-family: inherit;
        color: var(--black-light-3);
      }
    }

    input {
    }

    textarea {
      resize: vertical;
    }
  }

  .field-cover {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid var(--black-light-3);
    border-radius: var(--br-s);
    background-color: var(--white);
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      border: 1px solid var(--black);
    }

    :has(select:focus),
    :has(input:focus),
    :has(textarea:focus) {
      border: 1px solid var(--black);
      box-shadow: 0 0 0 0.4rem var(--primary-light-2);
    }
  }

  select:focus ~ .dropdownIcon {
    transition: all 0.3s;
    rotate: 180deg;
  }

  .category,
  .subCategory,
  .brand,
  .title,
  .description,
  .price {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }

  .price {
    width: 100%;
  }

  .priceInputField {
    width: 100%;
    display: flex;
    align-items: center;
    span {
      font-size: var(--fs-s);
      margin-right: 1rem;
    }
  }

  .icon-wrapper {
    position: relative;
    height: 2rem;
    width: 2rem;
  }
`;
