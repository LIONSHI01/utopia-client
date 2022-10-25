import React, { useState, useEffect } from 'react';

import { DisplayList } from '../components';
import { getAllPosts } from '../utils/postRequest';

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getAllPostHandler = async () => {
      const res = await getAllPosts();
      setPosts(res);
      // console.log(res);
    };
    getAllPostHandler();
  }, []);

  // console.log('Posts:', posts);

  return (
    <>
      <DisplayList posts={posts} />
    </>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   const data = await getAllPosts();
//   const posts = {};
//   console.log(data);
//   return {
//     props: {
//       posts: {},
//     },
//   };
// };
