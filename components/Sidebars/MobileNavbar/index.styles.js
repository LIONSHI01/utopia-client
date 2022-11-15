import styled, { css } from 'styled-components';
import { device } from '../../../styles/devices';

const fillinSpaceStickyStyles = css`
  height: 10rem;
  @media ${device.tablet} {
    display: unset;
  }
`;

const navBarStickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--bs-s);
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: var(--white);
  padding: 2rem 3rem;
  /* z-index: 999; */

  @media ${device.tablet} {
    display: flex;
    z-index: 999;
  }

  ${(props) => props.sticky && navBarStickyStyles}

  .upper_part {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--mg-s);
  }

  .logo {
    font-size: var(--fs-xxl);
    font-weight: 600;
    font-family: var(--ff-display);
  }

  .sidebar_open_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-light-2);
    height: 100%;
    cursor: pointer;
  }

  .user_section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const StickyFillinSpace = styled.div`
  height: 0;
  display: none;

  ${(props) => props.sticky && fillinSpaceStickyStyles}
`;
