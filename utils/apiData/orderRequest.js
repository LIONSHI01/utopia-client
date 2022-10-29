import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const getUserOrders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/userOrders/${userId}`,
  });

  return res.data.orders;
};

export const createOrder = async (userId, sellerId, postId, value) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/orders/`,
    data: {
      postedBy: userId,
      seller: sellerId,
      post: postId,
      value: value,
    },
  });

  return res.data;
};

export const updateOrder = async (orderId, address, txHash) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/orders/${orderId}`,
    data: {
      from: address,
      transactionHash: txHash,
    },
  });
  console.log(res);
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

export const validateOrder = async (orderId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/validate/${orderId}`,
  });
  console.log(res);
  return res.data;
};
