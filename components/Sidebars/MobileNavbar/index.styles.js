import styled, { css } from 'styled-components';
import { device } from '../../../styles/devices';

const fillinSpaceStickyStyles = css`
  height: 8rem;
`;

const navBarStickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--bs-s);
`;

export const NavbarContainer = styled.div`
  display: none;
  align-items: center;
  height: 8rem;
  width: 100%;
  background-color: var(--white);
  padding: 1rem 3rem;
  z-index: 999;

  ${(props) => props.sticky && navBarStickyStyles}

  .logo {
    font-size: var(--fs-xl);
    font-weight: 600;
    font-family: var(--ff-display);
    margin-right: 2rem;
  }
  .sidebar_open_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    height: 100%;
    cursor: pointer;
  }

  .user_section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-left: auto;
  }

  .sesarch_bar {
    width: 100%;
    margin-right: 2rem;
  }

  @media ${device.tablet} {
    display: flex;
  } ;
`;

export const StickyFillinSpace = styled.div`
  height: 0;

  ${(props) => props.sticky && fillinSpaceStickyStyles}
`;
