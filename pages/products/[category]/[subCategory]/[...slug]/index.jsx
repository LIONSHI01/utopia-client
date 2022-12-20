import React, { useEffect, useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import ReactTooltip from 'react-tooltip';

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
  IconButton,
  ICON_BUTTON_TYPES,
  EditDropdownMenu,
  BuyNowModal,
} from '../../../../../components';
import ethIcon from '../../../../../assets/image/eth-icon.png';
import { useGetUserHook } from '../../../../../utils/customHooks/fetchUserHook';
import { usePostDetailsHook } from '../../../../../utils/customHooks/postQueryHook';
import { useGetEthHook } from '../../../../../utils/customHooks/ethQueryHook';
import { useFollowHook } from '../../../../../utils/customHooks/useFollowHook';

import { isItemLiked } from '../../../../../utils/profileCalculator';
import { BsThreeDotsVertical } from '../../../../../components/ReactIcons';

import {
  DetailsPageContainer,
  OutterContainer,
  PostDetailsContainer,
  GalleryWrapper,
  DetailsWrapper,
  CTAWrapper,
  LoadingPageContainer,
  UpperContainer,
  LowerContainer,
  UpperLeftContainer,
  UpperRightContainer,
} from '../../../../../pages_styles/productDetailsPage.styles';

const ProductDetailsPage = () => {
  // CONFIGURATION
  const ref = useRef();
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

  const { isFollowing, isLoadingFollow, mutateFollowerHandler } = useFollowHook(
    {
      currentUserProfile: user,
      postCreatorId: seller?.id,
      refetchUser,
      refetchSeller,
    }
  );

  // STATE MANAGEMENT
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showAddToColModal, setShowAddToColModal] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);

  useEffect(() => {
    // Check if Post is liked by current user
    const ifLiked = isItemLiked(post?.collectionsLike, user?._id);
    setIsLiked(ifLiked);

    setIsAuthenticated(user?._id === post?.postedBy?.id);
  }, [post, user]);

  // Set Edit post button onclick effect
  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showEditDropdown && !ref.current.contains(e.target)) {
        setShowEditDropdown(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showEditDropdown]);

  // HANDLERS
  const onClickAddToCollectionHandler = () => {
    if (!data) return setShowAuthForm(true);
    setShowAddToColModal(true);
  };
  const onClickBuyHandler = () => {
    if (!data) return setShowAuthForm(true);

    setShowBuyNowModal(true);
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
            <UpperContainer>
              <UpperLeftContainer>
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
              </UpperLeftContainer>
              <UpperRightContainer>
                <SellerInfoBox
                  user={user}
                  seller={seller}
                  isFollowing={isFollowing}
                  isAuthenticated={isAuthenticated}
                  isLoadingFollow={isLoadingFollow}
                  mutateFollowerHandler={mutateFollowerHandler}
                />
                <DetailsWrapper>
                  <div className="upper-box">
                    <div className="title">{post?.title}</div>
                    <div className="price">
                      <div className="icon-wrapper" data-tip="ETH">
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
                        height="4rem"
                        width="100%"
                        buttonType={
                          isLiked ? BUTTON_TYPES.base : BUTTON_TYPES.outlineGrey
                        }
                        onClick={onClickAddToCollectionHandler}
                      >
                        {isLiked ? 'Liked' : 'Add to collection'}
                      </Button>
                      <Button
                        height="4rem"
                        width="100%"
                        onClick={onClickBuyHandler}
                      >
                        Buy now
                      </Button>

                      {isAuthenticated && (
                        <div className="editing-btn" ref={ref}>
                          <IconButton
                            size="x"
                            buttonType={ICON_BUTTON_TYPES.hoverBackground}
                            onClick={() => setShowEditDropdown((prev) => !prev)}
                          >
                            <BsThreeDotsVertical size={22} />
                          </IconButton>
                          <EditDropdownMenu
                            post={post}
                            showup={showEditDropdown}
                            setShowup={setShowEditDropdown}
                          />
                        </div>
                      )}
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
              </UpperRightContainer>
            </UpperContainer>
            <LowerContainer>
              <MeetSellerColumn sellerId={post?.postedBy?.id} />
              <ReviewBox reviews={post?.reviews} />
            </LowerContainer>
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
        <ReactTooltip
          className="react_tool_tip_styles"
          place="top"
          type="dark"
          effect="solid"
        />
      </DetailsPageContainer>
      <AddToCollectionModal
        refetchUser={refetchUser}
        refetchPost={refetchPost}
        postId={postId}
        showAddToColModal={showAddToColModal}
        setShowAddToColModal={setShowAddToColModal}
      />
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
      <BuyNowModal
        showup={showBuyNowModal}
        setShowup={setShowBuyNowModal}
        post={post}
        user={user}
        refetchUser={refetchUser}
      />
    </>
  );
};

export default ProductDetailsPage;
