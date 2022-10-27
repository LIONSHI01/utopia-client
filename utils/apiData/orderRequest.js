import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const getUserOrders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/userOrders/${userId}`,
  });
  console.log(res);
  return res.data.orders;
};
