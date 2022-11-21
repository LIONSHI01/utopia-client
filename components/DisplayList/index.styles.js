import styled from 'styled-components';
import { device } from '../../styles/devices';

export const DisplayContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-items: center;
  gap: 3rem;
  margin: 0 auto;

  .pagination_box {
    grid-column: 1/-1;
    align-self: center;
  }
`;
