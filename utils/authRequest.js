import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
    url: `${baseURL}/users/signin`,
    data: { email, password },
  });

  return res;
};
