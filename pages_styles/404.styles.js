import styled from 'styled-components';
import { device } from '../styles/devices';

export const PageWrapper = styled.main`
  min-height: calc(100vh - 50rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
`;

export const LinkSection = styled.section`
  display: grid;
  align-items: center;
  padding: 5rem 10rem;

  @media ${device.mobileL} {
    padding: 5rem 3rem;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 2rem;
    margin-bottom: var(--mg-x);

    h1 {
      font-size: 20rem;
      font-family: var(--ff-display);
      text-align: center;
    }
    p {
      font-size: var(--fs-x);
      line-height: 1.7;
      margin-bottom: var(--mg-s);
    }
  }

  .links {
    align-self: flex-start;

    h2 {
      font-size: var(--fs-xl);
      font-weight: 600;
      margin-bottom: var(--mg-m);
    }
    ul {
      display: grid;
      gap: 2.5rem;
      list-style: none;
    }
    li {
      font-size: var(--fs-x);
      text-transform: uppercase;
    }
    span {
      font-weight: 700;
    }

    .link {
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translateX(10px);
      }
    }
  }
`;

export const ImageSection = styled.section`
  height: 100%;
  width: 100%;
  position: relative;

  @media ${device.laptop} {
    display: none;
  }

  .image-container {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 0;
    height: 100%;
    width: 100%;
  }
`;
