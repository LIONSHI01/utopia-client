import styled from 'styled-components';

export const CardContaienr = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(5%, 100%);
  display: flex;
  flex-direction: column;

  width: 27rem;
  height: 25rem;

  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--br-m);
  box-shadow: var(--bs-m);

  background-color: ${({ theme }) => theme.dropdownBG};
  z-index: 100;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  .user-details {
    display: flex;
    flex-direction: column;
  }

  .name {
    font-size: var(--fs-ss);
    font-weight: 500;
    text-transform: capitalize;
    :hover {
      text-decoration: underline;
    }
  }

  .social-links {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      cursor: pointer;
    }
  }

  .social_icon {
    color: ${({ theme }) => theme.textLight2};
    :hover {
      color: var(--primary);
    }
  }
`;

export const ProfileContainer = styled.div`
  height: 5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.textLight2};
  }

  .numbers {
    color: ${({ theme }) => theme.textDark};
    font-weight: 600;
  }
`;

export const ImagesContainer = styled.div`
  height: 9rem;
  display: flex;

  .image-container {
    position: relative;
    width: 33.33333%;
    height: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  padding: 1rem;
  height: 5rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;
