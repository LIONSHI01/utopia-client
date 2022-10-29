import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 30rem;
  padding: 2rem;
  box-shadow: 2px 0 10px -2px rgba(0, 0, 0, 0.15);
  clip-path: inset(0px -15px 0px 0px);
`;

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: var(--mg-m);
  .icon-container {
    position: relative;
  }

  .user-image-box {
    position: relative;
    height: 8.5rem;
    width: 8.5rem;
    border-radius: 100px;
    overflow: hidden;
  }

  .placeholder {
    position: relative;
    height: 8.5rem;
    width: 8.5rem;
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

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    border-radius: 100px;
    cursor: pointer;
    box-shadow: var(--bs-m);
    transition: all 0.3s;
    border: 1px solid transparent;

    :hover {
      box-shadow: var(--bs-s);
      border: 1px solid var(--black-light-2);
    }
  }

  .user-details {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: var(--fs-xl);
      font-weight: 100;
      letter-spacing: -1px;
      line-height: 0;
      text-align: center;
    }
  }

  .follow-info {
    display: flex;
    gap: 1rem;
    font-size: var(--fs-ss);
    margin-bottom: 0.5rem;

    p {
      color: var(--black-light-2);
    }

    span {
      color: var(--black);
      margin-right: 0.5rem;
    }
  }

  .edit-profile {
    color: var(--black-light-2);

    font-size: var(--fs-ss);
    text-decoration: underline;
    :hover {
      color: var(--black);
    }
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .listItem {
    /* background-color: orange; */
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.5rem 3rem;
    font-size: var(--fs);
    font-weight: 100;
    width: 100%;
    border-radius: var(--br-m);
    transition: all 0.3s ease-in-out;
    :hover {
      background-color: var(--black-light-3);
    }
  }

  .active {
    background-color: var(--black-light-3);
  }
`;
