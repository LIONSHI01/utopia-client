import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../apiData/userRequest';

export const useGetUserHook = ({ userId }) => {
  const [user, setUser] = useState(null);

  const { isLoading, refetch } = useQuery(
    ['user', userId],
    () => getUser(userId),
    {
      onSuccess: (data) => setUser(data),
      onError: (err) =>
        console.log('encounter an error during fetching ==> ', err),
      enabled: !!userId,
    }
  );

  return { user, isLoading, refetch };
};
