import React from 'react';
import styled from 'styled-components';

const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.347);
  backdrop-filter: blur(10px);

  z-index: 1000;
`;

const Overlay = ({ setShowUp }) => {
  return <OverlayWrapper onClick={() => setShowUp(false)} />;
};

export default Overlay;
