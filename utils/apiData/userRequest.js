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
