import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const deleteNotiRequest = async (notificationId) => {
  return await axios({
    url: `${baseURL}/notifications/${notificationId}`,
    method: 'DELETE',
  });
};
