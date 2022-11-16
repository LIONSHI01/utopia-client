import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

// API to Server Backend Mongo (Not NEXTJS BACKEND)
export const signupRequest = async ({ username, email, password }) => {
  return axios({
    method: 'POST',
    url: `${baseURL}/users/signup`,
    data: { username, email, password },
  });
};

// API to Server Backend Mongo (Not NEXTJS BACKEND)
export const signinRequest = async ({ email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `http://localhost:3001/api/v1/users/signin`,
    data: { email, password },
  });

  return res;
};
