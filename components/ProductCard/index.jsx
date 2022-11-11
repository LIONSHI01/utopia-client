import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { BsFillHeartFill } from 'react-icons/bs';
import ethIcon from '../../assets/image/eth-icon.png';
import { selectUser } from '../../store/user/user.selector';
import { selectEthPrice } from '../../store/post/post.selector';
import { isItemLiked } from '../../utils/profileCalculator';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  ProfilePreviewCard,
  AddToCollectionModal,
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

  let hoverTimer;

  // STATE MANAGEMENT
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const user = useSelector(selectUser);
  const ethPrice = useSelector(selectEthPrice);

  useEffect(() => {
    const result = isItemLiked(post?.collectionsLike, user?._id);
    setIsLiked(result);
  }, [post, user]);

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
        <Link
          href={`/products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`}
        >
          <a>
            <ImageContainer>
              <Image
                src={post?.images[0]}
                alt="PRODUCT"
                objectFit="contain"
                objectPosition="center"
                layout="fill"
              />
            </ImageContainer>
          </a>
        </Link>
        <ContentContainer>
          <div className="details">
            <h3 className="title">{post?.title}</h3>
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
            <button
              onClick={() => setShowAddCollectionModal(true)}
              className="like-btn"
            >
              <BsFillHeartFill
                size={25}
                className={isLiked ? 'icon is_liked' : 'icon'}
              />
            </button>
            <Button
              size="m"
              type="button"
              buttonType={BUTTON_TYPES.base}
              onClick={() =>
                router.replace(
                  ` /products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`
                )
              }
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
    </>
  );
};

export default ProductCard;
