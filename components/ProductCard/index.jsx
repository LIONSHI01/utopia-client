import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';

import { productLinkGenerator } from '../../utils/productLinkGenerator';
import { BsFillHeartFill } from '../ReactIcons';
import { selectUser } from '../../store/user/user.selector';
import { selectEthPrice } from '../../store/post/post.selector';
import { isItemLiked } from '../../utils/profileCalculator';
import ethIcon from '../../assets/image/eth-icon.png';
import { image_error_placeholder } from '../../assets/image/image_error_placeholder.png';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  ProfilePreviewCard,
  AddToCollectionModal,
  AuthForm,
} from '../index';

import {
  CardContainer,
  ImageContainer,
  HeaderContaienr,
  ContentContainer,
} from './index.styles';

const ProductCard = ({ post }) => {
  // CONFIGURATION
  const router = useRouter();
  const productLink = productLinkGenerator(post);
  let hoverTimer;

  const postTitle =
    post?.title.length < 25 ? post?.title : `${post?.title?.slice(0, 25)} ...`;

  // STATE MANAGEMENT
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const user = useSelector(selectUser);
  const ethPrice = useSelector(selectEthPrice);
  const { data } = useSession();
  const [src, setSrc] = useState(post?.images[0]);

  useEffect(() => {
    const result = isItemLiked(post?.collectionsLike, user?._id);
    setIsLiked(result);
  }, [post, user]);

  const onClickLikeBtn = () => {
    if (!data) return setShowAuthForm(true);
    setShowAddCollectionModal(true);
  };

  return (
    <>
      <CardContainer>
        <HeaderContaienr>
          <div
            className="user-info"
            onMouseEnter={() => {
              hoverTimer = setTimeout(() => setShowProfilePreview(true), 300);
            }}
            onMouseLeave={() => {
              setShowProfilePreview(false);
              clearTimeout(hoverTimer);
            }}
          >
            <UserIcon user={post?.postedBy} size="s" />

            <Link href={`/users/${post?.postedBy?._id}/listings`}>
              <a>
                <span className="postedBy-name">{post?.postedBy?.name}</span>
              </a>
            </Link>
            {showProfilePreview && (
              <ProfilePreviewCard postByUser={post?.postedBy} />
            )}
          </div>
        </HeaderContaienr>
        <Link href={productLink}>
          <a>
            <ImageContainer>
              <Image
                src={src}
                alt="PRODUCT"
                objectFit="contain"
                objectPosition="center"
                layout="fill"
                onError={() => setSrc(image_error_placeholder)}
              />
            </ImageContainer>
          </a>
        </Link>
        <ContentContainer>
          <div className="details">
            <h3 className="title">{postTitle}</h3>
            <div className="price">
              <div className="icon-wrapper">
                <Image
                  src={ethIcon}
                  alt="eth-icon"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="value-info">
                <span className="eth-value">{post?.price}</span>
                <span className="item-value">
                  $ {(ethPrice * +post?.price).toFixed(2)}
                </span>
              </div>
            </div>
            <span className="status">Brand New</span>
          </div>
          <div className="buttons-group">
            <button onClick={onClickLikeBtn} className="like-btn">
              <BsFillHeartFill
                size={25}
                className={isLiked ? 'icon is_liked' : 'icon'}
              />
            </button>
            <Button
              size="m"
              type="button"
              buttonType={BUTTON_TYPES.base}
              onClick={() => router.replace(productLink)}
            >
              Details
            </Button>
          </div>
        </ContentContainer>
      </CardContainer>
      <AddToCollectionModal
        postId={post?._id}
        refetchUser={() => {}}
        showAddToColModal={showAddCollectionModal}
        setShowAddToColModal={setShowAddCollectionModal}
      />
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default ProductCard;
