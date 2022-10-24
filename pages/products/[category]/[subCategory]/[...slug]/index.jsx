import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  ImageDisplayModal,
  Button,
  BUTTON_TYPES,
  NavigationMap,
  SellerInfoBox,
  MoreFromSeller,
  SimilarPostsBox,
  MeetSellerColumn,
} from '../../../../../components';

import { getOnePost } from '../../../../../utils/postRequest';

import {
  DetailsPageContainer,
  OutterContainer,
  PostDetailsContainer,
  LeftContainer,
  GalleryWrapper,
  RightContainer,
  DetailsWrapper,
} from '../../../../../pages_styles/productDetailsPage.styles';

const ProductDetailsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { query } = router;
  const { category, subCategory, slug } = query;
  const postId = slug && slug[1];

  // STATE MANAGEMENT
  const [post, setPost] = useState(null);
  const [moreSellerPosts, setMoreSellerPosts] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);

  useEffect(() => {
    const getOnePostHandler = async () => {
      const data = await getOnePost(category, subCategory, postId);

      setPost(data?.post);
      setMoreSellerPosts(data?.sellerPosts);
      setSimilarPosts(data?.similarPosts);
    };
    if (category && subCategory && postId) {
      getOnePostHandler();
    }
  }, [category, subCategory, postId]);

  return (
    <DetailsPageContainer>
      <OutterContainer>
        <NavigationMap
          categoryValue={category}
          subCategoryValue={subCategory}
          postTitle={post?.title}
        />
        <PostDetailsContainer>
          <LeftContainer>
            <GalleryWrapper>
              <div className="thumbnail-col">
                {post?.images?.map((image, i) => (
                  <div
                    key={i}
                    className={
                      displayIndex === i ? 'thumbnail active' : 'thumbnail'
                    }
                    onClick={() => setDisplayIndex(i)}
                  >
                    <Image
                      src={image}
                      alt="post"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                ))}
              </div>
              <div
                className="displayed-image-contaienr"
                onClick={() => setShowDisplayModal(true)}
              >
                <Image
                  src={post?.images[displayIndex]}
                  alt="image"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              {showDisplayModal && (
                <ImageDisplayModal
                  images={post?.images}
                  setShowDisplayModal={setShowDisplayModal}
                />
              )}
            </GalleryWrapper>
            <MeetSellerColumn seller={post?.postedBy} />
          </LeftContainer>
          <RightContainer>
            <SellerInfoBox seller={post?.postedBy} />
            <DetailsWrapper>
              <div className="upper-box">
                <div className="title">{post?.title}</div>
                <div className="price">${post?.price}</div>
                <div className="buttons-group">
                  <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
                    Add to cart
                  </Button>
                  <Button size="full">Buy now</Button>
                </div>
              </div>
              <div className="lower-box">
                <div className="overview">
                  <h3>Overview</h3>
                  <div className="list-item">
                    <p className="list-title">Condition</p>
                    <p className="list-content">Brand new</p>
                  </div>
                  <div className="list-item">
                    <p className="list-title">Brand</p>
                    <p className="list-content">{post?.brand}</p>
                  </div>
                  <div className="list-item">
                    <p className="list-title">Category</p>
                    <div className="list-category">
                      <Link href={`/products/${category}`}>
                        <a>{post?.category?.replace('-', ' & ')}</a>
                      </Link>
                      <Link href={`/products/${category}/${subCategory}`}>
                        <a>{post?.subCategory?.replace('-', ' & ')}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="list-item">
                    <p className="list-title">Posted</p>
                    <p className="list-content">10/24/22</p>
                  </div>
                </div>
                <div className="description">
                  <h3>Description</h3>
                  <p>{post?.description}</p>
                </div>
              </div>
            </DetailsWrapper>
          </RightContainer>
        </PostDetailsContainer>
        {moreSellerPosts?.length > 0 && (
          <MoreFromSeller posts={moreSellerPosts} />
        )}
        {similarPosts?.length > 0 && <SimilarPostsBox posts={similarPosts} />}
      </OutterContainer>
    </DetailsPageContainer>
  );
};

export default ProductDetailsPage;
