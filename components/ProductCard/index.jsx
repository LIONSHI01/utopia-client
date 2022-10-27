import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { BsThreeDots, BsFillHeartFill } from 'react-icons/bs';

import { selectUser } from '../../store/user/user.selector';
import {
  UserIcon,
  IconButton,
  ICON_BUTTON_TYPES,
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
  let hoverTimer;

  // STATE MANAGEMENT
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const user = useSelector(selectUser);

  // console.log('ProductCard-Postdby', post?.postedBy);

  // HANDLERS

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

            <Link href={`/users/${post?.postedBy?._id}`}>
              <a>
                <span className="postedBy-name">{post?.postedBy?.name}</span>
              </a>
            </Link>
            {showProfilePreview && (
              <ProfilePreviewCard postByUser={post?.postedBy} />
            )}
          </div>
          <IconButton size="s" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
            <BsThreeDots size={20} />
          </IconButton>
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
            <span className="price">${post?.price}</span>
            <span className="status">Brand New</span>
          </div>
          <div className="buttons-group">
            <button
              className="like-btn"
              onClick={() => setShowAddCollectionModal(true)}
            >
              <BsFillHeartFill size={25} className="icon" />
            </button>
            <Button size="m" type="button" buttonType={BUTTON_TYPES.base}>
              Make Offer
            </Button>
          </div>
        </ContentContainer>
      </CardContainer>
      <AddToCollectionModal
        postId={post?._id}
        collections={user?.itemCollections}
        showAddToColModal={showAddCollectionModal}
        setShowAddToColModal={setShowAddCollectionModal}
      />
    </>
  );
};

export default ProductCard;
