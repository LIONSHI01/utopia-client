import React from 'react';
import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  visibility: visible;
  display: unset;
`;

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.347);
  backdrop-filter: blur(10px);

  z-index: 1000;

  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  display: none;

  ${(props) => props.showUp && showUpStyles}
`;

const Overlay = ({ showUp, setShowUp }) => {
  return <OverlayWrapper showUp={showUp} onClick={() => setShowUp(false)} />;
};

export default Overlay;
