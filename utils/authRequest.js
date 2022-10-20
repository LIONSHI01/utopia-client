import axios from 'axios';

const baseURL = 'http://localhost:3000/api/';

export const signupRequest = async ({ username, email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/auth/signup`,
    data: { username, email, password },
  });

  return res;
};
