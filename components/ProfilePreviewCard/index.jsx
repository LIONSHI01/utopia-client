import React from 'react';
import Image from 'next/image';

import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

import catImage from '../../assets/image/cat.jpg';
import pancakeImage from '../../assets/image/pancake.jpg';
import saladImage from '../../assets/image/salad.jpg';

const ImagePlaceHolders = [
  {
    name: 'cat',
    image: catImage,
  },
  {
    name: 'pancake',
    image: pancakeImage,
  },
  {
    name: 'salad',
    image: saladImage,
  },
];

import {
  Button,
  BUTTON_TYPES,
  UserIcon,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../index';

import {
  CardContaienr,
  InfoContainer,
  ProfileContainer,
  ImagesContainer,
  ButtonsContainer,
} from './index.styles';

const ProfilePreviewCard = () => {
  return (
    <CardContaienr>
      <InfoContainer>
        <UserIcon />
        <div className="user-details">
          <p className="name">Username</p>
          <div className="social-links">
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <AiFillInstagram size={15} color="var(--black-light-2)" />
            </IconButton>
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <AiOutlineTwitter size={15} color="var(--black-light-2)" />
            </IconButton>
            <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
              <GrFacebookOption size={15} color="var(--black-light-2)" />
            </IconButton>
          </div>
        </div>
      </InfoContainer>
      <ProfileContainer>
        <div className="section">
          <span className="numbers">89</span>
          posts
        </div>
        <div className="section">
          <span className="numbers">594</span>
          followers
        </div>
        <div className="section">
          <span className="numbers">102</span>
          following
        </div>
      </ProfileContainer>
      <ImagesContainer>
        {ImagePlaceHolders.map(({ name, image }) => (
          <div key={name} className="image-container">
            <Image
              src={image}
              alt={name}
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
          </div>
        ))}
      </ImagesContainer>
      <ButtonsContainer>
        <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
          Message
        </Button>
        <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
          Follow
        </Button>
      </ButtonsContainer>
    </CardContaienr>
  );
};

export default ProfilePreviewCard;
