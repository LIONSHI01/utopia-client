import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const createPost = async (data) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/posts`,
    data,
  });

  return res;
};

export const updateUserPhoto = async (data, userId) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/users/${userId}`,
    data,
  });

  return res;
};

export const getUser = async (userId) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `${baseURL}/users/${userId}`,
    });

    if (res.data.status === 'success') return res.data.user;
  } catch (err) {
    console.log(err);
  }
};
