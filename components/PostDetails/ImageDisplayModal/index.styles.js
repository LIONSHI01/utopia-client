import styled from 'styled-components';

export const DisplayModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  padding: 5rem;

  .close-btn {
    position: absolute;
    top: 3rem;
    right: 3rem;

    cursor: pointer;
  }
`;

export const DisplayedImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orangered;

  .display-image-container {
    position: relative;
    width: 50rem;
    height: 50rem;
    background-color: var(--white);
  }
`;

export const ThumbnailColumn = styled.div`
  display: flex;
  gap: 1rem;

  .thumbnail {
    position: relative;
    width: 10rem;
    height: 10rem;
    border-radius: var(--br-s);
    border: 2px solid var(--black-light-2);
    transition: all 0.3s;
    overflow: hidden;

    cursor: pointer;
    opacity: 0.6;

    :hover {
      opacity: 0.8;
    }
  }

  .acive {
    opacity: 1;
    border: 2px solid var(--black);
  }
`;
