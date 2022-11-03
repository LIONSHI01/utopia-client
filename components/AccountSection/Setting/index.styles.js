import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
`;
export const ContentsContainer = styled.div`
  margin: 5rem 10rem;
  background-color: var(--grey-light-3);
  border-radius: var(--br-x);
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 3rem;

  h3 {
    font-size: var(--fs-x);
  }

  h4 {
    font-size: var(--fs);
  }

  .profile-buttons-group {
    margin-top: var(--mg-m);
    display: flex;
    gap: 3rem;
  }
`;

export const UserInfoWrapper = styled.div``;
export const SocialMediaWrapper = styled.div`
  margin-top: var(--mg-s);
`;
export const AuthenticationWrapper = styled.div``;
export const AccountControlWrapper = styled.div``;
