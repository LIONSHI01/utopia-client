import axios from 'axios';
const baseURL = 'http://localhost:3001/api/v1';

export const updateUserProfile = async ({
  userId,
  name,
  email,
  walletAddress,
  bio,
  location,
  facebook,
  twitter,
  instagram,
  followings,
  shipping_address,
}) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `${baseURL}/users/profile/${userId}`,
      data: {
        name,
        email,
        walletAddress,
        bio,
        location,
        facebook,
        twitter,
        instagram,
        followings,
        shipping_address,
      },
    });
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const changePasswordRequest = async ({
  userId,
  currentPassword,
  password,
}) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/users/changePassword/${userId}`,
    data: { currentPassword, password },
  });

  return res;
};

export const inactivateUserRequest = async ({ userId, password }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/users/inactivateAccount/${userId}`,
    data: { password },
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
  if (!userId) return;
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

export const claimFaucet = async ({ userId, walletAddress }) => {
  if (!userId) return;
  try {
    const res = await axios({
      method: 'POST',
      url: `${baseURL}/users/claimFaucet/${userId}`,
      data: {
        walletAddress,
      },
    });

    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
};
