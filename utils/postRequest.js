import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllPosts = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/posts`,
  });

  return res.data.data.posts;
};

export const getCategoryPosts = async (category) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/posts/category/${category}`,
  });

  return res.data.posts;
};

export const getSubCategoryPosts = async ({ category, subCategory }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/posts/subCategory/${category}/${subCategory}`,
  });

  return res.data.posts;
};

export const getOnePost = async (category, subCategory, postId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseURL}/posts/${category}/${subCategory}/${postId}`,
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
      url: `${baseURL}/posts/${postId}`,
    });

    return res.data.data.post;
  } catch (err) {
    console.log(err);
  }
};

export const createPost = async ({ data }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/posts`,
    data,
  });

  return res;
};

export const updatePost = async ({ data, postId }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/posts/${postId}`,
    data: data,
  });

  return res;
};

export const inactivePost = async ({ postId }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/posts/inactivate/${postId}`,
  });

  return res;
};

export const searchPostsRequest = async (query) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/posts/search?q=${query}`,
  });

  return res.data;
};

export const getEthPrice = async () => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/posts/price`,
  });

  return res.data.data.price;
};
