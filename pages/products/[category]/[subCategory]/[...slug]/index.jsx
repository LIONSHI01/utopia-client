import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from 'react-query';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';

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
  Spinner,
} from '../../../../../components';
import ethIcon from '../../../../../assets/image/eth-icon.png';
import { getOnePost } from '../../../../../utils/postRequest';
import {
  getUser,
  updateUserProfile,
} from '../../../../../utils/apiData/userRequest';
import { createOrder } from '../../../../../utils/apiData/orderRequest';
import {
  isItemLiked,
  validateFollowingUser,
  newFollowingsCalculator,
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
  const { category, subCategory, slug } = query;
  const postId = slug && slug[1];
  const { data } = useSession();

  // STATE MANAGEMENT
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [seller, setSeller] = useState(null);
  const [moreSellerPosts, setMoreSellerPosts] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showAddToColModal, setShowAddToColModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Check if Post is liked by current user
    const ifLiked = isItemLiked(post?.collectionsLike, user?._id);
    setIsLiked(ifLiked);

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

  // API CALLS
  // Fetch Post
  const { isLoading: isLoadingPost, refetch: refetchPost } = useQuery(
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
  // Fetch Current User
  const { refetch: refetchUser } = useQuery(
    ['user', data?.profile?.id],
    () => getUser(data?.profile.id),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        setUser(data);
      },
      enabled: !!data?.profile?.id,
    }
  );

  // Fetch Seller
  const { refetch: refetchSeller } = useQuery(
    ['sellerProfile', post?.postedBy?.id],
    () => getUser(post?.postedBy?._id),
    {
      onSuccess: (data) => {
        setSeller(data);
      },
      onError: (err) => {
        console.log(err);
      },
      enabled: !!post?.postedBy?.id,
    }
  );

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
                <div className="buttons">
                  <Button
                    size="full"
                    buttonType={
                      isLiked ? BUTTON_TYPES.base : BUTTON_TYPES.outlineRed
                    }
                    onClick={() => setShowAddToColModal(true)}
                  >
                    {isLiked ? 'Liked' : 'Like this item'}
                  </Button>
                </div>
              </CTAWrapper>
              <MeetSellerColumn seller={post?.postedBy} />
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
                    <span>{post?.price}</span>
                  </div>
                  <div className="buttons-group">
                    <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
                      Add to cart
                    </Button>
                    <Button
                      isLoading={isOrdering}
                      size="full"
                      onClick={() =>
                        mutateBuying({
                          userId: user?._id,
                          sellerId: post?.postedBy?._id,
                          postId: post?._id,
                          value: post?.price,
                        })
                      }
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
          {similarPosts?.length > 0 && (
            <SimilarPostsBox
              category={category}
              subCategory={subCategory}
              posts={similarPosts}
            />
          )}
        </OutterContainer>
      </DetailsPageContainer>
      <AddToCollectionModal
        refetchUser={refetchUser}
        refetchPost={refetchPost}
        postId={postId}
        collections={user?.itemCollections}
        showAddToColModal={showAddToColModal}
        setShowAddToColModal={setShowAddToColModal}
      />
    </>
  );
};

export default ProductDetailsPage;
