import axios from 'axios';

export const getEthereumQuotes = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=eth',
      headers: {
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_CMC_API_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    });

    return res;
  } catch (err) {
    console.log(err);
  }
};
