import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  MdAddAPhoto,
  AiFillInstagram,
  AiOutlineTwitter,
  GrFacebookOption,
} from '../../ReactIcons';
import { profileLinks } from '../../../assets/constants';
import { SidebarContainer, UserInfoSection, MenuList } from './index.styles';
import { updateUserPhoto } from '../../../utils/apiData/userRequest';

const MenuSidebar = ({
  user,
  refetchUser,
  isAuthenticated,
  displaySection,
}) => {
  const router = useRouter();

  const updateUserPicHandler = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      const form = new FormData();
      form.append('images', e.target.files[0]);

      const res = await updateUserPhoto(form, user?._id);
      if (res.status === 200) refetchUser();
    }
  };

  return (
    <SidebarContainer>
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
          {isAuthenticated && (
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
          )}
        </div>
        <div className="user-details">
          <h3>{user?.name}</h3>
          <div className="social_links">
            {user?.instagram && (
              <a
                href={`https://${user?.instagram}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram size={20} />
              </a>
            )}
            {user?.twitter && (
              <a
                href={`https://${user?.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineTwitter size={20} />
              </a>
            )}
            {user?.facebook && (
              <a
                href={`https://${user?.facebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <GrFacebookOption size={20} />
              </a>
            )}
          </div>
          <div className="follow-info">
            <p>
              <span>{user?.followings?.length || 0}</span>Followings
            </p>
            <p>
              <span>{user?.followers?.length || 0}</span>Followers
            </p>
          </div>
          {user?.bio && (
            <div className="bio">
              <span>About me:</span>
              <p className="bio"> {user?.bio}</p>
            </div>
          )}
        </div>
      </UserInfoSection>
      <MenuList>
        {isAuthenticated ? (
          <>
            {profileLinks?.map((link) => (
              <li key={link.title}>
                <div
                  className={
                    displaySection === link.title
                      ? 'listItem active'
                      : 'listItem'
                  }
                  onClick={() =>
                    router.push(`/users/${user?._id}/${link.title}`)
                  }
                >
                  {link.icon}
                  <span>{link.title}</span>
                </div>
              </li>
            ))}
          </>
        ) : (
          <>
            {profileLinks
              ?.filter((item) => item.isPublic === true)
              ?.map((link) => (
                <li key={link.title}>
                  <div
                    className={
                      displaySection === link.title.toLocaleLowerCase()
                        ? 'listItem active'
                        : 'listItem'
                    }
                    onClick={() =>
                      router.push(`/users/${user?._id}/${link.title}`)
                    }
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </div>
                </li>
              ))}
          </>
        )}
      </MenuList>
    </SidebarContainer>
  );
};

export default MenuSidebar;
