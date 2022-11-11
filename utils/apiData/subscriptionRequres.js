import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createSubscription = async (email) => {
  const res = await axios({
    url: `${baseURL}/subscriptions`,
    method: 'POST',
    data: {
      email,
    },
  });

  return res;
};
