import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const BoxContainer = styled.div`
  margin-bottom: var(--mg-x);
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--mg-m);

    p {
      font-size: var(--fs-xxl);
      font-weight: 300;
    }
  }

  .seller-posts {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media ${device.mobileL} {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
  }
`;
