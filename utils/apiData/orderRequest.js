import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const getUserOrders = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/userOrders/${userId}`,
  });

  return res.data.data.orders;
};

export const getUserOffers = async (userId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/userOffers/${userId}`,
  });

  return res.data.data.offers;
};

export const createOrder = async ({ userId, sellerId, postId, value }) => {
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

export const updateOrder = async ({ orderId, address, txHash }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/orders/${orderId}`,
    data: {
      from: address,
      transactionHash: txHash,
    },
  });

  return res.data;
};

export const deleteOrder = async (orderId) => {
  const res = await axios({
    method: 'DELETE',
    url: `${baseURL}/orders/${orderId}`,
  });

  return res.data;
};

export const validateOrder = async (orderId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/validate/${orderId}`,
  });

  return res.data;
};

export const buyerConfirmOrder = async ({ orderId, userId }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/buyerConfirm/${userId}/${orderId}`,
  });

  return res.data;
};
export const sellerConfirmOrder = async ({ orderId, userId }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/sellerConfirm/${userId}/${orderId}`,
  });

  return res.data;
};

export const sellerClaimFund = async ({ orderId, userId }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/sellerClaim/${userId}/${orderId}`,
  });

  return res.data;
};
