import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Link from 'next/link';
import Image from 'next/image';

import {
  ImageDisplayModal,
  Button,
  BUTTON_TYPES,
  NavigationMap,
  SellerInfoBox,
  MoreFromSeller,
  SimilarPostsBox,
  MeetSellerColumn,
  AddToCollectionModal,
} from '../../../../../components';

import { getOnePost } from '../../../../../utils/postRequest';
import { getUser } from '../../../../../utils/accountRequest';
import { createOrder } from '../../../../../utils/apiData/orderRequest';

import {
  DetailsPageContainer,
  OutterContainer,
  PostDetailsContainer,
  LeftContainer,
  GalleryWrapper,
  RightContainer,
  DetailsWrapper,
  CTAWrapper,
} from '../../../../../pages_styles/productDetailsPage.styles';

const ProductDetailsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { query } = router;
  const { category, subCategory, slug } = query;
  const postId = slug && slug[1];
  const { data } = useSession();

  // STATE MANAGEMENT
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [moreSellerPosts, setMoreSellerPosts] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showAddToColModal, setShowAddToColModal] = useState(false);

  const buyHandler = async () => {
    await createOrder(user?._id, post?.postedBy?._id, post?._id, post?.price);
  };

  const onSuccess = (data) => {
    setPost(data?.post);
    setMoreSellerPosts(data?.sellerPosts);
    setSimilarPosts(data?.similarPosts);
  };

  const onError = (error) => {
    console.log(error);
  };
  const {
    isLoading: isLoadingPost,
    isError: isErrorPost,
    data: postData,
  } = useQuery(
    ['postDetails', category, subCategory, postId],
    () => getOnePost(category, subCategory, postId),
    {
      onError,
      onSuccess,
      enabled: !!category && !!subCategory && !!postId,
    }
  );

  const onSuccessUser = (data) => {
    setUser(data);
  };

  const onErrorUser = (error) => {
    console.log(error);
  };
  const {
    isLoading: isLoadingUser,
    isError: isErrorUser,
    data: userData,
  } = useQuery(['user', data?.profile?.id], () => getUser(data?.profile.id), {
    onError: onErrorUser,
    onSuccess: onSuccessUser,
    enabled: !!data?.profile?.id,
  });

  // console.log(user);

  // useEffect(() => {
  //   const getOnePostHandler = async () => {
  //     const data = await getOnePost(category, subCategory, postId);
  //     setPost(data?.post);
  //     setMoreSellerPosts(data?.sellerPosts);
  //     setSimilarPosts(data?.similarPosts);
  //   };
  //   if (category && subCategory && postId) {
  //     getOnePostHandler();
  //   }
  // }, [category, subCategory, postId]);

  // useEffect(() => {
  //   const getUserHandler = async () => {
  //     const userData = await getUser(data?.profile.id);
  //     setUser(userData);
  //   };

  //   if (data?.profile.id) {
  //     getUserHandler();
  //   }
  // }, [data?.profile?.id]);

  return (
    <>
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
                  {post?.images && (
                    <Image
                      src={post?.images[displayIndex]}
                      alt="image"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  )}
                </div>
                {showDisplayModal && (
                  <ImageDisplayModal
                    images={post?.images}
                    setShowDisplayModal={setShowDisplayModal}
                  />
                )}
              </GalleryWrapper>
              <CTAWrapper>
                <div className="cta">
                  <p>Have a similar item?</p>
                  <Link href="/create-post">
                    <a>Sell yours</a>
                  </Link>
                </div>
                <div className="buttons">
                  <Button
                    size="full"
                    buttonType={BUTTON_TYPES.outlineRed}
                    onClick={() => setShowAddToColModal(true)}
                  >
                    Like this item
                  </Button>
                </div>
              </CTAWrapper>
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
                    <Button size="full" onClick={buyHandler}>
                      Buy now
                    </Button>
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
      <AddToCollectionModal
        postId={postId}
        collections={user?.itemCollections}
        showAddToColModal={showAddToColModal}
        setShowAddToColModal={setShowAddToColModal}
      />
    </>
  );
};

export default ProductDetailsPage;
