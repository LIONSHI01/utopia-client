import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/posts';

export const getAllPosts = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}`,
  });

  return res.data.data.posts;
};

export const getCategoryPosts = async (category) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/category/${category}`,
  });

  return res.data.posts;
};

export const getSubCategoryPosts = async ({ category, subCategory }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/subCategory/${category}/${subCategory}`,
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

export const getPostDetails = async (postId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseURL}/${postId}`,
    });

    return res.data.data.post;
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

export const updatePost = async ({ data, postId }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/${postId}`,
    data: data,
  });

  return res;
};

export const inactivePost = async ({ postId }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/inactivate/${postId}`,
  });

  return res;
};

export const searchPostsRequest = async (query) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/search?q=${query}`,
  });

  return res.data;
};

export const getEthPrice = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/price`,
  });

  return res.data.data.price;
};
