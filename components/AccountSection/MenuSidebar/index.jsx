import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MdAddAPhoto } from 'react-icons/md';

import { profileLinks } from '../../../assets/constants';
import { SidebarContainer, UserInfoSection, MenuList } from './index.styles';
import { updateUserPhoto } from '../../../utils/accountRequest';

const MenuSidebar = ({ user }) => {
  const router = useRouter();

  const updateUserPicHandler = async (e) => {
    e.preventDefault();

    if (e.target.files[0]) {
      const form = new FormData();
      form.append('images', e.target.files[0]);

      const res = await updateUserPhoto(form, user?._id);
      if (res.status === 200) router.reload();
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
        </div>
      </UserInfoSection>
      <MenuList>
        {profileLinks?.map((link) => (
          <li key={link.title}>
            <Link href={link.path}>
              <a
                className={
                  router.pathname === link.path ? 'listItem active' : 'listItem'
                }
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </MenuList>
    </SidebarContainer>
  );
};

export default MenuSidebar;
