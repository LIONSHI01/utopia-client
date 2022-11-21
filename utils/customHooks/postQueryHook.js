import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllPosts, getOnePost } from '../postRequest';

export const useGetAllPostsHook = () => {
  const [posts, setPosts] = useState(null);

  const { isLoading } = useQuery(['allPosts'], getAllPosts, {
    onSuccess: (data) => setPosts(data),
    onError: (err) =>
      console.log('encounter an error during fetching ==> ', err),
  });

  return { posts, isLoading };
};

export const usePostDetailsHook = ({ category, subCategory, postId }) => {
  const [post, setPost] = useState(null);
  const [moreSellerPosts, setMoreSellerPosts] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);

  const { isLoading, refetch } = useQuery(
    ['postDetails', category, subCategory, postId],
    () => getOnePost(category, subCategory, postId),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        setPost(data?.post);
        setMoreSellerPosts(data?.sellerPosts);
        setSimilarPosts(data?.similarPosts);
      },
      enabled: !!category && !!subCategory && !!postId,
    }
  );

  return { post, moreSellerPosts, similarPosts, isLoading, refetch };
};
