import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import validator from 'validator';

import { ImProfile } from 'react-icons/im';

import { updateUserProfile } from '../../../../utils/apiData/userRequest';

import { FormInputComp, Button, BUTTON_TYPES } from '../../../index';

import {
  ProfileWrapper,
  UserInfoWrapper,
  SocialMediaWrapper,
} from './index.styles';

const ProfileBox = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [profileFields, setProfileFields] = useState(user);

  const {
    name,
    email,
    walletAddress,
    bio,
    location,
    facebook,
    twitter,
    instagram,
  } = profileFields || {};

  // HANDLERS
  const onChangeProfileHandler = (e) => {
    const { name, value } = e.target;
    setProfileFields({ ...profileFields, [name]: value });
  };

  const onSubmitProfileHandler = () => {
    if (!validator.isEmail(email))
      return toast.error('Please provide valid email');

    if (!validator.isEthereumAddress(walletAddress))
      return toast.error('Please provide valid Ethereum address');

    mutateUserProfile({
      userId: user._id,
      name,
      email,
      walletAddress,
      bio,
      location,
      facebook,
      twitter,
      instagram,
    });
  };

  const restoreProfileHandler = () => {
    setProfileFields(user);
  };

  const { isLoading: isUpdatingProfile, mutate: mutateUserProfile } =
    useMutation(updateUserProfile, {
      onSuccess: (data) => {
        toast.success('Profile updated');
        refetchUser();
      },
      onError: (err) => {
        console.log(err);
      },
    });

  return (
    <ProfileWrapper>
      <div className="heading">
        <ImProfile size={25} />
        <h3>Edit profile</h3>
      </div>
      <UserInfoWrapper>
        <FormInputComp
          label="Username"
          fieldName="username"
          value={name}
          name="name"
          onChange={onChangeProfileHandler}
        />
        <FormInputComp
          label="Email"
          fieldName="email"
          value={email}
          name="email"
          onChange={onChangeProfileHandler}
        />

        <FormInputComp
          label="Web3 Address"
          fieldName="web3_address"
          value={walletAddress}
          name="walletAddress"
          onChange={onChangeProfileHandler}
        />
        <FormInputComp
          inputType="textarea"
          label="Bio"
          fieldName="bio"
          value={bio}
          name="bio"
          onChange={onChangeProfileHandler}
        />
        <FormInputComp
          label="Location"
          fieldName="location"
          value={location}
          name="location"
          onChange={onChangeProfileHandler}
        />
      </UserInfoWrapper>
      <SocialMediaWrapper>
        <h4 className="socials-heading">Connect accounts</h4>
        <FormInputComp
          label="Facebook"
          fieldName="facebook"
          value={facebook}
          name="facebook"
          onChange={onChangeProfileHandler}
        />
        <FormInputComp
          label="Twitter"
          fieldName="twitter"
          value={twitter}
          name="twitter"
          onChange={onChangeProfileHandler}
        />
        <FormInputComp
          label="Instagram"
          fieldName="instagram"
          value={instagram}
          name="instagram"
          onChange={onChangeProfileHandler}
        />
        <div className="profile-buttons-group">
          <Button
            isLoading={isUpdatingProfile}
            size="x"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onSubmitProfileHandler}
          >
            Save
          </Button>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={restoreProfileHandler}
          >
            Undo Changes
          </Button>
        </div>
      </SocialMediaWrapper>
    </ProfileWrapper>
  );
};

export default ProfileBox;
