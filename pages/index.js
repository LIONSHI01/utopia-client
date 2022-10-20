import React from 'react';
import { useSession } from 'next-auth/react';

import { DisplayList } from '../components';

const Home = () => {
  // const { data } = useSession();
  // console.log(data);
  return (
    <>
      <DisplayList />
    </>
  );
};

export default Home;
