import styled, { css } from 'styled-components';

const showupStyles = css`
  width: 15rem;
  /* height: 12rem; */
  height: auto;
  visibility: visible;
  opacity: 1;
`;

const contentsShowUpStyles = css`
  opacity: 1;
  visibility: visible;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0%, 110%);

  height: auto;
  width: 0rem;
  background-color: var(--white);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: var(--br-m);
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem 0;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  z-index: 999;
  /* overflow-x: hidden; */

  ${(props) => props.showup && showupStyles}

  ::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 20px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  }

  ul {
    list-style: none;
  }
`;

export const ContentWrapper = styled.div`
  min-width: 13rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  ${(props) => props.showup && contentsShowUpStyles}

  .item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    font-size: var(--fs-ss);
    font-weight: 400;
    color: var(--black);
    cursor: pointer;

    :hover {
      background-color: var(--grey-light-1);
    }
  }

  .item.faucet {
    color: var(--primary);
    font-weight: 500;
  }
`;
