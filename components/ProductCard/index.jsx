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
import SaladImg from '../../assets/image/salad.jpg';

import {
  CardContainer,
  ImageContainer,
  HeaderContaienr,
  ContentContainer,
} from './index.styles';

const ProductCard = () => {
  // CONFIGURATION
  let hoverTimer;

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
          <UserIcon username="Lion" size="s" />
          {/* Temple PLACEHOLDER  */}
          <Link href={`/user-profile/usernumber`}>
            <a>
              <span>Username</span>
            </a>
          </Link>
          {showProfilePreview && <ProfilePreviewCard />}
        </div>
        <IconButton size="s" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
          <BsThreeDots size={20} />
        </IconButton>
      </HeaderContaienr>
      <ImageContainer>
        <Image
          src={SaladImg}
          alt="PRODUCT"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </ImageContainer>
      <ContentContainer>
        <div className="details">
          <h3 className="title">Nike Foodwear 42</h3>
          <span className="price">$500</span>
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
