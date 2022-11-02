import React from 'react';
import styled from 'styled-components';

import ClipLoader from 'react-spinners/ClipLoader';
import BeatLoader from 'react-spinners/BeatLoader';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: var(--fs);
  }
`;

const Spinner = ({ message }) => {
  return (
    <SpinnerWrapper>
      {/* <ClipLoader
        color="var(--primary)"
        // loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      <BeatLoader
        color="var(--primary)"
        // loading={loading}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>{message}</p>
    </SpinnerWrapper>
  );
};

export default Spinner;
