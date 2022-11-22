import React from 'react';
import styled from 'styled-components';
import PuffLoader from 'react-spinners/PuffLoader';
import MoonLoader from 'react-spinners/MoonLoader';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLoader = ({ size = 20, loaderColor = 'var(--white)' }) => {
  return (
    <SpinnerWrapper>
      <MoonLoader
        color={loaderColor}
        size={size}
        margin={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1}
      />
    </SpinnerWrapper>
  );
};

export default ButtonLoader;
