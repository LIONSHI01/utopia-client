import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const createPost = async (data) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/posts`,
    // headers: { 'Content-Type': 'multipart/form-data' },
    data,
  });

  return res;
};
