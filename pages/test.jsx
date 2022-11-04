import React, { useState } from 'react';
import { Button } from '../components';

const test = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Button size="x" isLoading={isLoading} onClick={() => setIsLoading(true)}>
        Button
      </Button>
    </div>
  );
};

export default test;
