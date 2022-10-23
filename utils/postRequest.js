import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/posts';

export const getAllPosts = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}`,
  });

  // console.log(res.data.posts);
  return res.data.posts;
};

export const getCategoryPosts = async (category) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/${category}`,
  });

  // console.log(res.data.posts);
  return res.data.posts;
};
