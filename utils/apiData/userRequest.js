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
