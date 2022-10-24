import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const PostDetailsContainer = styled.div`
  display: flex;

  margin: 0 5rem;
`;

export const LeftContainer = styled.div`
  width: 70%;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  .thumbnail-col {
  }
  .displayed-image-contaienr {
    position: relative;
    height: 45rem;
    width: 45rem;
    background-color: var(--white);
  }
`;

export const RightContainer = styled.div``;
