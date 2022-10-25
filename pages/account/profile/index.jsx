import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MdAddAPhoto } from 'react-icons/md';

import { updateUserPhoto, getUser } from '../../../utils/accountRequest';

import {
  ProfilePageContainer,
  MainContainer,
  ControlPanel,
  DisplayZone,
  UserInfoSection,
  CollectionSection,
} from '../../../pages_styles/accountProfilePage.styles';

import { CollectionItem } from '../../../components';

const AccountProfilePage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { data } = useSession();
  const user = data?.profile;
  // console.log(user);

  // STATE MANAGEMENT
  const [itemCollections, setItemCollections] = useState([]);

  const updateUserPicHandler = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      // console.log('send update quest');
      const form = new FormData();
      form.append('images', e.target.files[0]);

      const res = await updateUserPhoto(form, user?._id);
      if (res.status === 200) router.reload();
    }
  };
  // console.log(user);
  useEffect(() => {
    const getUserData = async () => {
      const res = await getUser(user?._id);
      if (res) setItemCollections(res.itemCollections);
    };

    if (user?._id) {
      getUserData();
    }
  }, [user?._id]);

  // console.log(itemCollections);

  return (
    <ProfilePageContainer>
      <MainContainer>
        <ControlPanel>
          <UserInfoSection>
            <div className="icon-container">
              {user?.photo ? (
                <div className="user-image-box">
                  <Image
                    src={user?.photo}
                    alt="user"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              ) : (
                <div className="placeholder">
                  <span>{user?.name?.slice(0, 1)}</span>
                </div>
              )}
              <div className="update-box">
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={updateUserPicHandler}
                />
                <label htmlFor="img" className="add-photo-btn">
                  <MdAddAPhoto size={20} />
                </label>
              </div>
            </div>
            <div className="user-details">
              <h3>{user?.name}</h3>
              <div className="follow-info">
                <p>
                  <span>22</span>Followings
                </p>
                <p>
                  <span>100</span>Followers
                </p>
              </div>
              <Link href="/account/edit-profile">
                <a className="edit-profile">Edit profile</a>
              </Link>
            </div>
          </UserInfoSection>
          <CollectionSection>
            <div className="display-zone">
              {itemCollections?.map((itemCollection) => (
                <CollectionItem
                  key={itemCollection?._id}
                  itemCollections={itemCollections}
                />
              ))}
            </div>
          </CollectionSection>
        </ControlPanel>
        <DisplayZone>DISPLAY ZONE</DisplayZone>
      </MainContainer>
    </ProfilePageContainer>
  );
};

export default AccountProfilePage;
