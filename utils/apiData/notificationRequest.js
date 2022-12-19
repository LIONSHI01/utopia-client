import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const deleteNotiRequest = async (notificationId) => {
  return await axios({
    url: `${baseURL}/notifications/${notificationId}`,
    method: 'DELETE',
  });
};
