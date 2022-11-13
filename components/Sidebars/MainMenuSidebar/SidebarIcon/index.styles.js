import styled, { css } from 'styled-components';

const upperOpenStyles = css`
  transform: rotate(135deg);
  top: 0;
`;
const lowerOpenStyles = css`
  transform: rotate(-135deg);
  top: 0;
`;
const middleOpenStyles = css`
  background-color: transparent;
`;

export const IconWrapper = styled.div`
  position: fixed;
  top: 3rem;
  left: 3rem;

  height: 5rem;
  width: 5rem;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: var(--bs-s);
  cursor: pointer;
  z-index: 2100;

  display: flex;
  align-items: center;
  justify-content: center;

  .middle_dash {
    position: relative;
    height: 2px;
    width: 60%;
    background-color: var(--black);
    opacity: 1;
    display: inline-block;
    transition: all 0.3s;

    ${(props) => props.open && middleOpenStyles};

    ::before,
    ::after {
      content: '';
      position: absolute;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--black);
      transition: all 0.3s;
    }

    ::before {
      top: 1rem;

      ${(props) => props.open && lowerOpenStyles};
    }

    ::after {
      bottom: 1rem;

      ${(props) => props.open && upperOpenStyles};
    }
  }
`;
