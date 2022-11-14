import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const ItemWrapper = styled.div`
  position: relative;

  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 3px solid transparent;
  border-top: 3px solid transparent;

  :hover {
    border-bottom: 3px solid var(--primary);
  }

  span {
    font-size: var(--fs);
    font-weight: 300;
    color: var(--black-light-2);
    text-transform: capitalize;

    @media ${device.laptop} {
      font-size: var(--fs-ss);
    }
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-10%, 102%);

  display: flex;
  flex-direction: column;

  min-width: 25rem;
  background-color: var(--white);
  box-shadow: var(--bs-s);
  border-radius: var(--br-x);
  padding: 2rem 2rem 2rem 3rem;

  z-index: 100;

  @media ${device.laptop} {
    min-width: 20rem;
    padding: 1rem 1rem 1rem 2rem;
  }

  .subCategory-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--black-light-2);
    font-size: var(--fs-s);
    padding: 0.8rem 0;
    font-weight: 100;
    text-transform: capitalize;

    @media ${device.laptop} {
      font-size: var(--fs-ss);
    }

    :hover {
      color: var(--black);
    }
    :hover .arrow-icon {
      color: var(--black);
    }
  }

  .arrow-icon {
    color: var(--white);
  }
`;
