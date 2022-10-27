import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MdAddAPhoto } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { updateUserPhoto, getUser } from '../../../utils/accountRequest';

import {
  ProfilePageContainer,
  MainContainer,
  ControlPanel,
  DisplayZone,
  UserInfoSection,
  CollectionSection,
  CreateButtonWrapper,
} from '../../../pages_styles/accountProfilePage.styles';

import {
  CollectionItem,
  CreateCollectionModal,
  CollectionDisplay,
} from '../../../components';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>Create collection</span>
  </CreateButtonWrapper>
);

const AccountProfilePage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT
  const [itemCollections, setItemCollections] = useState([]);
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    itemCollections[0]
  );

  const updateUserPicHandler = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      const form = new FormData();
      form.append('images', e.target.files[0]);

      const res = await updateUserPhoto(form, user?._id);
      if (res.status === 200) router.reload();
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const res = await getUser(user?._id);

      if (res) {
        setItemCollections(res.itemCollections);
        setSelectedCollection(res.itemCollections[0]);
      }
    };

    if (user?._id) {
      getUserData();
    }
  }, [user?._id]);

  return (
    <ProfilePageContainer>
      <CreateButton onClick={() => setShowCreateCollectionModal(true)} />
      <CreateCollectionModal
        user={user}
        showCreateCollectionModal={showCreateCollectionModal}
        setShowCreateCollectionModal={setShowCreateCollectionModal}
      />
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
                  collection={itemCollection}
                  onClick={() => setSelectedCollection(itemCollection)}
                />
              ))}
            </div>
          </CollectionSection>
        </ControlPanel>
        <CollectionDisplay collection={selectedCollection} />
      </MainContainer>
    </ProfilePageContainer>
  );
};

export default AccountProfilePage;
