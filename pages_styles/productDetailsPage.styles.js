import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 5rem;
`;

export const PostDetailsContainer = styled.div`
  display: flex;
  margin-bottom: var(--mg-x);
  gap: 5rem;
`;

export const LeftContainer = styled.div`
  width: 60%;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: var(--mg-x);

  .thumbnail-col {
    display: flex;
    flex-direction: column;
    width: 7rem;
    gap: 1rem;

    overflow-y: scroll;
  }

  .thumbnail {
    position: relative;
    width: 7rem;
    height: 7rem;
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

  .active {
    opacity: 1;
    border: 2px solid var(--black);
  }

  .displayed-image-contaienr {
    position: relative;
    width: 65rem;
    height: 55rem;
    background-color: var(--white);
    /* background-color: orangered; */
    border-radius: var(--br-s);
    overflow: hidden;

    cursor: zoom-in;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid var(--grey-light-2);
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  .cta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: var(--fs-ss);
    color: var(--black-light-2);
    font-weight: 100;

    a {
      font-weight: 500;
      color: var(--primary);
    }
  }

  .buttons {
    height: 4rem;
    width: 12rem;
    margin-left: auto;
  }
`;

export const RightContainer = styled.div`
  width: 40%;
`;
export const DetailsWrapper = styled.div`
  width: 100%;
  .upper-box {
    border-bottom: 1px solid var(--black-light-3);
    margin-bottom: var(--mg-m);
  }

  .title {
    font-size: var(--fs-xxl);
    font-weight: 400;
    letter-spacing: -1px;
    margin-bottom: var(--mg-m);
    color: var(--black-light-2);
  }

  .price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: var(--mg-m);

    span {
      font-size: var(--fs-xl);
      font-weight: 600;
    }
  }

  .icon-wrapper {
    position: relative;
    height: 3rem;
    width: 3rem;
  }

  .buttons-group {
    height: 4rem;
    display: flex;
    gap: 2rem;
    margin-bottom: var(--mg-m);
  }

  .lower-box {
    & > * {
      margin-bottom: var(--mg-m);
    }
  }

  .overview {
    display: flex;
    flex-direction: column;

    /* gap: 1rem; */

    h3 {
      font-size: var(--fs-x);
      font-weight: 400;
      line-height: 0;
    }
  }

  .list-item {
    display: grid;
    grid-template-columns: 2fr 8fr;
    /* gap: 2rem; */
    font-size: var(--fs);
    font-weight: 100;
    margin-bottom: var(--mg-s);
  }

  .list-title {
    color: var(--black-light-2);
  }

  .list-content,
  .list-category {
    text-transform: capitalize;
  }

  .list-category {
    text-decoration: underline;
    display: flex;
    gap: 1rem;
  }

  .description {
    h3 {
      font-size: var(--fs-x);
      font-weight: 400;
      line-height: 0;
    }
    p {
      font-size: var(--fs-s);
      font-weight: 100;
    }
  }
`;

export const LoadingPageContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
