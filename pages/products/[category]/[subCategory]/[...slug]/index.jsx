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
} from '../../../../../components';
import ethIcon from '../../../../../assets/image/eth-icon.png';
import { getOnePost } from '../../../../../utils/postRequest';
import { getUser } from '../../../../../utils/apiData/userRequest';
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
  const isAuthenticated = true;

  // STATE MANAGEMENT
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [moreSellerPosts, setMoreSellerPosts] = useState(null);
  const [similarPosts, setSimilarPosts] = useState(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [showDisplayModal, setShowDisplayModal] = useState(false);
  const [showAddToColModal, setShowAddToColModal] = useState(false);

  const { mutate: mutateBuying, isSuccess: isOrderSuccess } = useMutation(
    createOrder,
    {
      onSuccess: () => {
        toast.success(
          `Successfully ordered < ${post?.title} >, please check your order list`
        );
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const {
    isLoading: isLoadingPost,
    isError: isErrorPost,
    data: postData,
  } = useQuery(
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

  const {
    isLoading: isLoadingUser,
    isError: isErrorUser,
    data: userData,
    refetch: refetchUser,
  } = useQuery(['user', data?.profile?.id], () => getUser(data?.profile.id), {
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      setUser(data);
    },
    enabled: !!data?.profile?.id,
  });

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
              <SellerInfoBox
                post={post}
                seller={post?.postedBy}
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
        postId={postId}
        collections={user?.itemCollections}
        showAddToColModal={showAddToColModal}
        setShowAddToColModal={setShowAddToColModal}
      />
    </>
  );
};

export default ProductDetailsPage;
