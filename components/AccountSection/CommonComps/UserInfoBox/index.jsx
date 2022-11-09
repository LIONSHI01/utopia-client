import React from 'react';
import Link from 'next/link';
// import { GrFacebookOption } from 'react-icons/gr';
// import { BsCalendar3 } from 'react-icons/bs';
// import { GoLocation } from 'react-icons/go';
// import { HiOutlineMail } from 'react-icons/hi';
// import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import {
  GrFacebookOption,
  BsCalendar3,
  GoLocation,
  HiOutlineMail,
  AiOutlineTwitter,
  AiFillInstagram,
} from '../../../ReactIcons';
import { BoxContainer } from './index.styles';
import {
  UserIcon,
  IconButton,
  ICON_BUTTON_TYPES,
  RatingItem,
} from '../../../index';

const UserInfoBox = ({ seller, buyer }) => {
  // FOR OFFER PAGE
  if (buyer) {
    const userJoinDate = new Date(
      Date.parse(buyer?.createdAt)
    )?.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
    });

    return (
      <BoxContainer>
        <h4 className="heading">Buyer Info</h4>
        <div className="info_box">
          <Link href={`/users/${buyer?.id}/collections`}>
            <a className="userInfo_top">
              <UserIcon user={buyer} />
              <div className="username">{buyer?.name}</div>
            </a>
          </Link>
          <div className="social_links">
            {buyer?.instagram && (
              <a href={buyer?.instagram} target="_blank" rel="noreferrer">
                <AiFillInstagram size={15} color="var(--black-light-2)" />
              </a>
            )}
            {buyer?.twitter && (
              <a href={buyer?.twitter} target="_blank" rel="noreferrer">
                <AiOutlineTwitter size={15} color="var(--black-light-2)" />
              </a>
            )}
            {buyer?.facebook && (
              <a href={buyer?.facebook} target="_blank" rel="noreferrer">
                <GrFacebookOption size={15} color="var(--black-light-2)" />
              </a>
            )}
          </div>
          {buyer?.location && (
            <div className="location">
              <GoLocation size={15} />
              <span>{buyer?.location}</span>
            </div>
          )}

          <div className="join_since">
            <BsCalendar3 size={15} />
            <span>Joined {userJoinDate}</span>
          </div>
          <div className="email">
            <HiOutlineMail size={18} />
            <span>{buyer?.email}</span>
          </div>
          <div className="follow_info">
            <span>{buyer?.followers?.length || 0} followers</span>
            <span>{buyer?.followings?.length || 0} followings</span>
          </div>
          {/* <div className="social_links">
            <a href={buyer?.instagram} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <AiFillInstagram size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
            <a href={buyer?.twitter} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <AiOutlineTwitter size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
            <a href={buyer?.facebook} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <GrFacebookOption size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
          </div> */}
        </div>

        <div className="shippingAddress">
          <p className="shippingAddress_heading">Shipping Address:</p>
          <p>{buyer?.shipping_address}</p>
        </div>
      </BoxContainer>
    );
  }

  // FOR ORDER PAGE
  if (seller) {
    // CONFIGURATION
    // Calculate date
    const userJoinDate = new Date(
      Date.parse(seller?.createdAt)
    )?.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'long',
    });

    //Calculate seller sales
    const sellerSales = seller?.offers?.filter(
      (offer) => offer.status === 'completed'
    )?.length;

    return (
      <BoxContainer>
        <h4 className="heading">Seller Info</h4>
        <div className="info_box">
          <div className="userInfo_top">
            <UserIcon user={seller} />
            <div className="userInfo_top_details">
              <Link href={`/users/${seller?.id}/collections`}>
                <a className="username">{seller?.name}</a>
              </Link>
              <div className="sales_reviews">
                <div className="scores">
                  <RatingItem rating={5} starSize={15} />
                </div>
                <div className="sales">{sellerSales || 0} sales</div>
              </div>
            </div>
          </div>
          <div className="social_links">
            {seller?.instagram && (
              <a href={seller?.instagram} target="_blank" rel="noreferrer">
                <AiFillInstagram size={15} color="var(--black-light-2)" />
              </a>
            )}
            {seller?.twitter && (
              <a href={seller?.twitter} target="_blank" rel="noreferrer">
                <AiOutlineTwitter size={15} color="var(--black-light-2)" />
              </a>
            )}
            {seller?.facebook && (
              <a href={seller?.facebook} target="_blank" rel="noreferrer">
                <GrFacebookOption size={15} color="var(--black-light-2)" />
              </a>
            )}
          </div>
          {seller?.location && (
            <div className="location">
              <GoLocation size={15} />
              <span>{seller?.location}</span>
            </div>
          )}

          <div className="join_since">
            <BsCalendar3 size={15} />
            <span>Joined {userJoinDate}</span>
          </div>
          <div className="email">
            <HiOutlineMail size={18} />
            <span>{seller?.email}</span>
          </div>
          <div className="follow_info">
            <span>{seller?.followers?.length || 0} followers</span>
            <span>{seller?.followings?.length || 0} followings</span>
          </div>
          {/* <div className="social_links">
            <a href={seller?.instagram} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <AiFillInstagram size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
            <a href={seller?.twitter} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <AiOutlineTwitter size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
            <a href={seller?.facebook} target="_blank" rel="noreferrer">
              <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
                <GrFacebookOption size={15} color="var(--black-light-2)" />
              </IconButton>
            </a>
          </div> */}
        </div>
        <div className="bio">
          <h5 className="bio_heading">About me:</h5>
          <p>{seller?.bio || 'Hi there, nothing about me yet.'}</p>
        </div>
      </BoxContainer>
    );
  }
};

export default UserInfoBox;
