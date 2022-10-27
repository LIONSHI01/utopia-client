import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Image from 'next/image';

import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

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
import { getUser } from '../../utils/accountRequest';

const ProfilePreviewCard = ({ postByUser }) => {
  const [postOwner, setPostOwner] = useState(null);
  const previewImages = postOwner?.posts
    ?.map((post) => post?.images[0])
    ?.slice(0, 3);

  useEffect(() => {
    const getPostOwnerData = async () => {
      const data = await getUser(postByUser);
      setPostOwner(data);
    };
    getPostOwnerData();
  }, [postByUser]);

  return (
    <CardContaienr>
      <InfoContainer>
        <UserIcon user={postOwner} />
        <div className="user-details">
          <p className="name">{postOwner?.name}</p>
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
          <span className="numbers">{postOwner?.posts?.length || 0}</span>
          posts
        </div>
        <div className="section">
          <span className="numbers">{postOwner?.followers?.length || 0}</span>
          followers
        </div>
        <div className="section">
          <span className="numbers">{postOwner?.followings?.length || 0}</span>
          following
        </div>
      </ProfileContainer>
      <ImagesContainer>
        {previewImages?.map((image, i) => (
          <div key={i} className="image-container">
            <Image
              src={image && image}
              alt="Preview"
              objectFit="contain"
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
