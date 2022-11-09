import { useState } from 'react';
import { useQuery } from 'react-query';

import { getEthPrice } from '../postRequest';

export const useGetEthHook = () => {
  const [ethQuote, setEthQuote] = useState(0);

  useQuery(['ethPrice'], getEthPrice, {
    onSuccess: (data) => setEthQuote(data),
    onError: (err) => console.log(err),
    staleTime: 60 * 60 * 1000,
  });

  return ethQuote;
};
