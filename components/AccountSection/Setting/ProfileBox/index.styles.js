import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--black-light-3);
    margin-bottom: var(--mg-m);
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: var(--mg-x);
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .socials-heading {
    font-size: var(--fs);
  }
`;
