import React from 'react';
import styled from 'styled-components';
import { Oval } from 'react-loader-spinner';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLoader = ({
  height = 25,
  width = 25,
  loaderColor = 'var(--primary)',
  loaderRingColor = 'var(--white)',
}) => {
  return (
    <SpinnerWrapper>
      <Oval
        height={height}
        width={width}
        color={loaderColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={loaderRingColor}
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </SpinnerWrapper>
  );
};

export default ButtonLoader;
