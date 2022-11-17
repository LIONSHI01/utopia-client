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

export const createOrder = async ({
  userId,
  sellerId,
  postId,
  value,
  hash,
}) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/orders/`,
    data: {
      postedBy: userId,
      seller: sellerId,
      post: postId,
      value: value,
      hash,
    },
  });

  return res.data;
};

export const deleteOrder = async (orderId) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/inactivate/${orderId}`,
  });

  console.log(res);
  return res.data;
};

export const validateOrder = async ({ orderId, transaction_hash, from }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/orders/validate/${orderId}`,
    data: {
      transaction_hash,
      from,
    },
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

export const sellerClaimFund = async ({ orderId, userId }) => {
  const res = await axios({
    method: 'GET',
    url: `${baseURL}/orders/sellerClaim/${userId}/${orderId}`,
  });

  return res.data;
};
