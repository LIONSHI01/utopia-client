import styled from 'styled-components';
import { device } from '../../styles/devices';

export const FooterContainer = styled.div`
  background-color: var(--black);
  display: flex;
  color: var(--white);
`;

export const MasterFramworkWrapper = styled.div`
  width: 144rem;
  padding: 0 14px;
  margin: 5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 4rem;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

export const LogoColWrapper = styled.div`
  display: flex;
  align-items: center;

  /* background-color: green; */

  .logo {
    display: block;
    margin: auto 0;
    color: var(--white);
    font-size: 5.2rem;
    font-family: var(--ff-display);
  }
`;

export const CategoriesColWrapper = styled.div`
  .category_col_links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: capitalize;
  }

  .category_col_heading {
    font-size: var(--fs);
    font-weight: 400;
    margin-bottom: var(--mg-m);
  }

  .category_col_link {
    font-size: var(--fs-s);
    font-weight: 100;

    :hover {
      text-decoration: underline;
    }
  }
`;
export const BusinessColWrapper = styled.div`
  .about_col_heading {
    font-size: var(--fs);
    font-weight: 400;
    margin-bottom: var(--mg-m);
  }
  .about_col_links {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-transform: capitalize;
  }

  .about_col_link {
    font-size: var(--fs-s);
    font-weight: 100;

    :hover {
      text-decoration: underline;
    }
  }
`;
export const SocialsColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  a {
    display: block;
  }

  .socials_col_icon_box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 100px;
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: var(--primary);
    }
  }

  .socials_col_links {
    display: flex;
    gap: 1rem;
  }

  .socials_col_link {
    & > * {
      :hover {
        color: var(--white);
      }
    }
  }
`;

export const EmailBarContainer = styled.div`
  border-radius: var(--br-s);
  transition: all 0.3s ease-in-out;

  form {
    display: flex;
    background-color: var(--white);
    padding: 0.1rem;
    border-radius: var(--br-s);
    height: 4rem;
  }

  :has(input:focus) {
    box-shadow: 0 0 0 0.3rem #ff9a77;
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    /* background-color: orangered; */
    font-size: var(--fs-s);
    color: var(--black-light-2);
    padding: 0 1rem;

    ::placeholder {
      font-family: inherit;
      font-size: var(--fs-s);
      color: var(--black-light-3);
    }
    :focus {
      outline: none;
    }
  }

  .btn_container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--br-s);
    height: 100%;
    width: 3.8rem;
    background-color: var(--black);
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :active {
      scale: 0.85;
    }
    :hover {
      background-color: var(--primary);
    }
  }
  .icon {
    color: var(--white);
  }
`;
