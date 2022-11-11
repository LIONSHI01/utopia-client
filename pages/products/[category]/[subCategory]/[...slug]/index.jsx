import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

import {
  ImageDisplayModal,
  Button,
  BUTTON_TYPES,
  NavigationMap,
  SellerInfoBox,
  PostsDisplayList,
  MeetSellerColumn,
  AddToCollectionModal,
  Spinner,
  ReviewBox,
  AuthForm,
} from '../../../../../components';
import ethIcon from '../../../../../assets/image/eth-icon.png';
import { useGetUserHook } from '../../../../../utils/reactQueryHooks/fetchUserHook';
import { usePostDetailsHook } from '../../../../../utils/reactQueryHooks/postQueryHook';
import { useGetEthHook } from '../../../../../utils/reactQueryHooks/ethQueryHook';
import { createOrder } from '../../../../../utils/apiData/orderRequest';
import {
  isItemLiked,
  validateFollowingUser,
} from '../../../../../utils/profileCalculator';

import {
  DetailsPageContainer,
  OutterContainer,
  PostDetailsContainer,
  LeftContainer,
  GalleryWrapper,
  RightContainer,
  DetailsWrapper,
  CTAWrapper,
  LoadingPageContainer,
} from '../../../../../pages_styles/productDetailsPage.styles';

const ProductDetailsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { query } = router;
  const { data } = useSession();
  const { category, subCategory, slug } = query;
  const postId = slug && slug[1];
  const ethQuote = useGetEthHook();

  // fetch post, similar posts, seller posts data
  const {
    post,
    moreSellerPosts,
    similarPosts,
    isLoading: isLoadingPost,
    refetch: refetchPost,
  } = usePostDetailsHook({ category, subCategory, postId });
  // fetch user, seller data
  const { user, refetch: refetchUser } = useGetUserHook({
    userId: data?.profile?.id,
  });
  const { user: seller, refetch: refetchSeller } = useGetUserHook({
    userId: post?.postedBy?.id,
  });

  // STATE MANAGEMENT
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showAddToColModal, setShowAddToColModal] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Check if Post is liked by current user
    const ifLiked = isItemLiked(post?.collectionsLike, user?._id);
    setIsLiked(ifLiked);

    // API CALLS
    // Check if PostCreator is follower by current user
    const ifFollowing = validateFollowingUser(
      user?.followings,
      post?.postedBy?.id
    );
    setIsFollowing(ifFollowing);
    setIsAuthenticated(user?._id === post?.postedBy?.id);
  }, [post, user]);

  const {
    mutate: mutateBuying,
    isSuccess: isOrderSuccess,
    isLoading: isOrdering,
  } = useMutation(createOrder, {
    onSuccess: () => {
      toast.success(
        `Successfully ordered < ${post?.title} >, please check your order list`
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // HANDLERS
  const onClickAddToCollectionHandler = () => {
    if (!data) return setShowAuthForm(true);
    setShowAddToColModal(true);
  };
  const onClickBuyHandler = () => {
    if (!data) return setShowAuthForm(true);
    mutateBuying({
      userId: user?._id,
      sellerId: post?.postedBy?._id,
      postId: post?._id,
      value: post?.price,
    });
  };

  if (isLoadingPost)
    return (
      <LoadingPageContainer>
        <Spinner message="Loading item for you ..." />
      </LoadingPageContainer>
    );
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
              </CTAWrapper>
              <MeetSellerColumn sellerId={post?.postedBy?.id} />
              <ReviewBox reviews={post?.reviews} />
            </LeftContainer>
            <RightContainer>
              <SellerInfoBox
                user={user}
                seller={seller}
                refetchUser={refetchUser}
                refetchSeller={refetchSeller}
                isFollowing={isFollowing}
                post={post}
                isAuthenticated={isAuthenticated}
              />
              <DetailsWrapper>
                <div className="upper-box">
                  <div className="title">{post?.title}</div>
                  <div className="price">
                    <div className="icon-wrapper">
                      <Image
                        src={ethIcon}
                        alt="eth-icon"
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                      />
                    </div>
                    <div className="value-info">
                      <span className="eth-value">{post?.price}</span>
                      <span className="item-value">
                        $ {(ethQuote * +post?.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="buttons-group">
                    <Button
                      size="full"
                      buttonType={
                        isLiked ? BUTTON_TYPES.base : BUTTON_TYPES.outlineGrey
                      }
                      onClick={onClickAddToCollectionHandler}
                    >
                      {isLiked ? 'Liked' : 'Add to collection'}
                    </Button>
                    <Button
                      isLoading={isOrdering}
                      size="full"
                      onClick={onClickBuyHandler}
                    >
                      {isOrderSuccess ? 'Ordered' : 'Buy now'}
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
                      <p className="list-content">
                        {new Date(
                          Date.parse(post?.createdAt)
                        )?.toLocaleDateString('en-us', {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit',
                        })}
                      </p>
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
            <PostsDisplayList
              posts={moreSellerPosts}
              heading="More from Seller"
              viewMoreLink={`/users/${post?.postedBy?.id}/listings`}
            />
          )}
          {similarPosts?.length > 0 && (
            <PostsDisplayList
              posts={similarPosts}
              heading="Items you may like"
              viewMoreLink={`/products/${category}/${subCategory}`}
            />
          )}
        </OutterContainer>
      </DetailsPageContainer>
      <AddToCollectionModal
        refetchUser={refetchUser}
        refetchPost={refetchPost}
        postId={postId}
        showAddToColModal={showAddToColModal}
        setShowAddToColModal={setShowAddToColModal}
      />
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default ProductDetailsPage;
