import React from 'react';
import { Overlay } from '../index';
import { ModalContainer } from './index.styles';

const MasterModalFramework = ({ children, showup, setShowup }) => {
  return (
    <>
      <ModalContainer showUp={showup}>{children}</ModalContainer>;
      <Overlay showUp={showup} setShowUp={setShowup} />
    </>
  );
};

export default MasterModalFramework;
