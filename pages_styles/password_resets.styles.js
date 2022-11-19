import styled from 'styled-components';
import { device } from '../styles/devices';

export const PageContainer = styled.div`
  height: calc(100vh - 10rem);
  width: 100vw;
`;
export const FrameworkContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 60fr 40fr;
  align-items: center;

  @media ${device.tablet_portrait} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: auto;

  @media ${device.tablet_portrait} {
    width: 100vw;
    height: 35%;
  }
`;

export const FormContainer = styled.div`
  width: 35rem;
  border-radius: var(--br-x);
  margin: auto;
  padding: 2rem;

  .heading {
    font-size: var(--fs-xl);
    margin-bottom: var(--mg-m);
    font-weight: 500;
  }

  .input_fields {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: var(--mg-m);
  }
`;
