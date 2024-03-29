import styled from 'styled-components';
import { device } from '../../../../styles/devices';

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  width: 100%;

  @media ${device.mobileL} {
    padding: 3rem 14px;
  }
  .heading {
    font-size: var(--fs-xl);
    font-weight: 500;
  }
`;

export const OrdersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid var(--black-light-3);
`;

export const EmptyOrderWrapper = styled.div`
  height: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p {
    font-size: var(--fs-xl);
    font-style: italic;
  }
`;
