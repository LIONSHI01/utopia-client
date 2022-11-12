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

// API to Server Backend Mongo (Not NEXTJS BACKEND)
export const signinRequest = async ({ email, password }) => {
  const res = await axios({
    method: 'POST',
    url: `http://localhost:3001/api/v1/users/signin`,
    data: { email, password },
  });

  return res;
};

// export const walletSignin = async (walletAddress) => {
//   const res = await axios({
//     method: 'POST',
//     url: `http://localhost:3001/api/v1/users/walletSignin`,
//     data: { walletAddress },
//   });

//   return res;
// };
