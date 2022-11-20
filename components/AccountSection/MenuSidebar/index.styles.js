import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const SidebarContainer = styled.div`
  width: 30rem;
  padding: 2rem;
  box-shadow: 2px 0 10px -2px rgba(0, 0, 0, 0.15);
  clip-path: inset(0px -15px 0px 0px);

  @media ${device.tablet} {
    display: none;
  }
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: var(--mg-s);

  .icon-container {
    position: relative;
  }

  .user-image-box {
    position: relative;
    height: 8rem;
    width: 8rem;
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.textLight3};
  }

  .placeholder {
    position: relative;
    height: 8rem;
    width: 8rem;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    span {
      color: var(--white);
      line-height: 0;
      font-size: 4rem;
      text-transform: uppercase;
    }
  }

  .update-box {
    input {
      display: none;
    }
  }

  .add-photo-btn {
    position: absolute;
    right: -10%;
    bottom: 0;
    height: 4rem;
    width: 4rem;
    background-color: var(--white);
    /* background-color: ${({ theme }) => theme.background}; */

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: var(--bs-m);
    transition: all 0.3s;
    border: 1px solid transparent;
    color: var(--black);

    :hover {
      box-shadow: var(--bs-s);
      border: 1px solid ${({ theme }) => theme.textLight2};
    }
  }

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: var(--fs-x);
      font-weight: 400;
      letter-spacing: -1px;
      margin-bottom: var(--mg-s);
      text-align: center;
    }
  }

  .social_links {
    display: flex;
    gap: 1.5rem;
    margin-bottom: var(--mg-s);

    & > * {
      color: ${({ theme }) => theme.textLight2};
      transition: all 0.3s ease-in-out;

      :hover {
        color: var(--primary);
      }
    }
  }

  .follow-info {
    display: flex;
    gap: 1rem;
    font-size: var(--fs-ss);
    margin-bottom: var(--mg-m);

    p {
      color: ${({ theme }) => theme.textLight2};
    }

    span {
      color: ${({ theme }) => theme.textDark};
      margin-right: 0.5rem;
    }
  }

  .bio {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: var(--fs-ss);
    color: ${({ theme }) => theme.textLight2};

    span {
      font-weight: 500;
    }
  }

  .edit-profile {
    color: ${({ theme }) => theme.textLight2};

    font-size: var(--fs-ss);
    text-decoration: underline;
    :hover {
      color: ${({ theme }) => theme.textDark};
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;

  .listItem {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.5rem 3rem;
    font-size: var(--fs);
    font-weight: 100;
    width: 100%;
    border-radius: var(--br-m);
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.dropdownHover};
      color: ${({ theme }) => theme.textPrimary};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.textLight3};
    color: var(--primary);
    font-weight: 500;
  }
`;
