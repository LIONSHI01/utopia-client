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

  .social-links {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ProfileContainer = styled.div`
  height: 5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const ImagesContainer = styled.div`
  height: 9rem;
  width: 100%;
  display: flex;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  height: 5rem;
`;
