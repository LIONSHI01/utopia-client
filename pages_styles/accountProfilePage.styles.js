import styled from 'styled-components';

export const ProfilePageContainer = styled.div``;

export const MainContainer = styled.div`
  width: var(--container);
  margin: 0 auto;
`;
export const ControlPanel = styled.div`
  display: flex;
  margin: var(--mg-m);
  gap: 5rem;
`;
export const UserInfoSection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  .icon-container {
    position: relative;
    /* cursor: pointer; */
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
export const CollectionSection = styled.div`
  .display-zone {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const DisplayZone = styled.div``;
