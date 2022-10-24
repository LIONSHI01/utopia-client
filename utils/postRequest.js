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

export const getSubCategoryPosts = async (category, subCategory) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/${category}/${subCategory}`,
  });

  // console.log(res.data.posts);
  return res.data.posts;
};

export const getOnePost = async (category, subCategory, postId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/${category}/${subCategory}/${postId}`,
  });

  // console.log(res);
  const results = {
    post: res.data.post,
    sellerPosts: res.data.sellerPosts,
    similarPosts: res.data.similarPosts,
  };

  return results;
};
