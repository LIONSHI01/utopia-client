import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

export const forgotPasswordRequest = async (email) => {
  try {
    return axios({
      url: `${baseURL}/users/forgotPassword`,
      method: 'POST',
      data: {
        email,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const resetPasswordRequest = async ({ token, password }) => {
  try {
    return axios({
      url: `${baseURL}/users/resetPassword/${token}`,
      method: 'PATCH',
      data: {
        password,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const inactivateUserRequest = async ({ userId, password }) => {
  return axios({
    method: 'PATCH',
    url: `${baseURL}/users/inactivateAccount/${userId}`,
    data: { password },
  });
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
  try {
    return axios({
      method: 'POST',
      url: `${baseURL}/users/claimFaucet/${userId}`,
      data: {
        walletAddress,
      },
    });
  } catch (err) {
    console.log(err);
    return err;
  }
};
