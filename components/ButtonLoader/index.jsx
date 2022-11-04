import React from 'react';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLoader = () => {
  return (
    <SpinnerWrapper>
      <PuffLoader
        color="var(--white)"
        size={25}
        margin={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerWrapper>
  );
};

export default ButtonLoader;
