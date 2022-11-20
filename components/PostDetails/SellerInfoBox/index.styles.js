import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: var(--mg-m);

  @media ${device.laptop} {
    display: none;
  }

  .upperBox {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .seller-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: var(--fs-s);
      :hover {
        text-decoration: underline;
      }
    }
  }

  .editing-btn {
    position: relative;
    margin-left: auto;
  }

  .lowerBox {
    display: flex;
    gap: 1rem;
  }

  .sales {
    font-size: var(--fs-ss);
    color: ${({ theme }) => theme.textLight2};
  }
  .rates {
  }
`;
