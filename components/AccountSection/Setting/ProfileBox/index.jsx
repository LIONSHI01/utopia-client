import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import validator from 'validator';

// import { ImProfile } from 'react-icons/im';

import { FaWallet, ImProfile } from '../../../index';

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
  const [walletAddress, setwalletAddress] = useState(user?.walletAddress);

  const {
    name,
    email,
    // walletAddress,
    bio,
    location,
    facebook,
    twitter,
    instagram,
    shipping_address,
  } = profileFields || {};

  // HANDLERS
  const onChangeProfileHandler = (e) => {
    const { name, value } = e.target;
    setProfileFields({ ...profileFields, [name]: value });
  };

  const onSubmitProfileHandler = () => {
    if (email?.length > 0 && !validator.isEmail(email))
      return toast.error('Please provide valid email');

    if (
      walletAddress?.length > 0 &&
      !validator.isEthereumAddress(walletAddress)
    )
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
      shipping_address,
    });
  };

  const restoreProfileHandler = () => {
    setProfileFields(user);
  };

  // API CALLS
  const { isLoading: isUpdatingProfile, mutate: mutateUserProfile } =
    useMutation(updateUserProfile, {
      onSuccess: () => {
        toast.success('Profile updated');
        refetchUser();
      },
      onError: (err) => {
        console.log(err);
      },
    });

  // HANDLERS
  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          setwalletAddress(res[0]);
        });
    } else {
      alert('Please install Metamask extension.');
    }
  };

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
        <FormInputComp
          label="Shipping Address"
          fieldName="shipping_address"
          value={shipping_address}
          name="shipping_address"
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
            width="7rem"
            height="4rem"
            buttonType={BUTTON_TYPES.outlineRed}
            onClick={onSubmitProfileHandler}
          >
            Save
          </Button>
          <Button
            width="14rem"
            height="4rem"
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
