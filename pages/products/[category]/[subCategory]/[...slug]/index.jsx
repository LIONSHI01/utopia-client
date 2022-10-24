import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { getOnePost } from '../../../../../utils/postRequest';

import {
  DetailsPageContainer,
  PostDetailsContainer,
  LeftContainer,
  GalleryWrapper,
  RightContainer,
} from '../../../../../pages_styles/productDetailsPage.styles';

const ProductDetailsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { query } = router;
  const { category, subCategory, slug } = query;
  const postId = slug && slug[1];
  // console.log(category, subCategory, postId);

  // STATE MANAGEMENT
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getOnePostHandler = async () => {
      const data = await getOnePost(category, subCategory, postId);

      setPost(data);
    };
    if (category && subCategory && postId) {
      getOnePostHandler();
    }
  }, [category, subCategory, postId]);

  console.log(post);
  return (
    <DetailsPageContainer>
      <PostDetailsContainer>
        <LeftContainer>
          <GalleryWrapper>
            <div className="thumbnail-col"></div>
            <div className="displayed-image-contaienr">
              <Image
                src={post?.images[0]}
                alt="image"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
          </GalleryWrapper>
        </LeftContainer>
        <RightContainer>RightContainer</RightContainer>
      </PostDetailsContainer>
      {/* <SimilarPostsContainer></SimilarPostsContainer> */}
    </DetailsPageContainer>
  );
};

export default ProductDetailsPage;
