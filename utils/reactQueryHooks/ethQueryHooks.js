import { useState } from 'react';
import { useQuery } from 'react-query';
import { getEthPrice } from '../postRequest';

export const useGetEthHooks = () => {
  const [ethPrice, setEthPrice] = useState(0);
  useQuery(['ethPrice'], getEthPrice, {
    onSuccess: (data) => setEthPrice(data),
    onError: (err) => console.log(err),
    staleTime: 60 * 60 * 1000,
  });

  return ethPrice;
};
