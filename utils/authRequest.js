import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const signupRequest = async ({ username, email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/users/signup`,
    data: { username, email, password },
  });

  return res;
};
