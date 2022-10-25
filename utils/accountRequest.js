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
