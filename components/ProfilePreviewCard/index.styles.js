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

  border: 1px solid var(--grey-light-1);
  border-radius: var(--br-m);
  box-shadow: var(--bs-m);

  background-color: var(--white);
  z-index: 100;
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  border-bottom: 1px solid var(--grey-light-1);

  .user-details {
    display: flex;
    flex-direction: column;
    /* align-items: center;
    justify-content: space-between; */
  }
  .name {
    font-size: var(--fs-ss);
    font-weight: 500;
    text-transform: capitalize;
  }

  .social-links {
    display: flex;

    align-items: center;
  }
`;

export const ProfileContainer = styled.div`
  height: 5rem;
  padding: 2rem;
  /* background-color: orangered; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--grey-light-1);

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--black-light-2);
  }

  .numbers {
    color: var(--black);
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
  /* background-color: orangered; */
`;
