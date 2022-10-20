import axios from 'axios';

const baseURL = 'http://localhost:8000/users';

export const signupRequest = async ({ username, email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/signup`,
    data: { username, email, password },
  });

  return res;
};
