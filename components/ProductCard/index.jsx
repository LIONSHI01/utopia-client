import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsThreeDots, BsFillHeartFill } from 'react-icons/bs';

import {
  UserIcon,
  IconButton,
  ICON_BUTTON_TYPES,
  Button,
  BUTTON_TYPES,
  ProfilePreviewCard,
} from '../index';

// import SaladImg from '../../assets/image/salad.jpg';

import {
  CardContainer,
  ImageContainer,
  HeaderContaienr,
  ContentContainer,
} from './index.styles';

const ProductCard = ({ post }) => {
  // CONFIGURATION
  let hoverTimer;
  const { _id, slug, images, title, category, subCategory, price, postedBy } =
    post;

  // STATE MANAGEMENT
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  return (
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

          <Link href={`/users/${postedBy?._id}`}>
            <a>
              <span className="postedBy-name">{postedBy?.name}</span>
            </a>
          </Link>
          {showProfilePreview && <ProfilePreviewCard postByUser={postedBy} />}
        </div>
        <IconButton size="s" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
          <BsThreeDots size={20} />
        </IconButton>
      </HeaderContaienr>
      <Link href={`/products/${category}/${subCategory}/${slug}/${_id}`}>
        <a>
          <ImageContainer>
            <Image
              src={images[0]}
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
          <h3 className="title">{title}</h3>
          <span className="price">${price}</span>
          <span className="status">Brand New</span>
        </div>
        <div className="buttons-group">
          <button className="like-btn">
            <BsFillHeartFill size={25} className="icon" />
          </button>
          <Button size="m" type="button" buttonType={BUTTON_TYPES.base}>
            Make Offer
          </Button>
        </div>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProductCard;
