import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const getUserOrders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/userOrders/${userId}`,
  });
  // console.log(res);
  return res.data.orders;
};

export const createOrder = async (userId, sellerId, postId) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/orders/`,
    data: {
      postedBy: userId,
      seller: sellerId,
      post: postId,
    },
  });
  // console.log(res);
  return res.data;
};

export const updateOrder = async (orderId, data) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/orders/${orderId}`,
    data: {
      transactionHash: data,
    },
  });
  // console.log(res);
  return res.data;
};

export const deleteOrder = async (orderId) => {
  const res = await axios({
    method: 'DELETE',
    url: `${baseURL}/orders/${orderId}`,
  });
  console.log(res);
  return res.data;
};
