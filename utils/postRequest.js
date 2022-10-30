import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/posts';

export const getAllPosts = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}`,
  });

  return res.data.posts;
};

export const getCategoryPosts = async (category) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/${category}`,
  });

  return res.data.posts;
};

export const getSubCategoryPosts = async (category, subCategory) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/${category}/${subCategory}`,
  });

  return res.data.posts;
};

export const getOnePost = async (category, subCategory, postId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseURL}/${category}/${subCategory}/${postId}`,
    });

    const results = {
      post: res.data.post,
      sellerPosts: res.data.sellerPosts,
      similarPosts: res.data.similarPosts,
    };

    return results;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async ({ data }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/`,
    data,
  });

  return res;
};
