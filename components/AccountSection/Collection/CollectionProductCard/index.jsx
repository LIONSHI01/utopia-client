import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import ethIcon from '../../../../assets/image/eth-icon.png';
import { selectEthPrice } from '../../../../store/post/post.selector';
import { removeItemFromCollection } from '../../../../utils/profileCalculator';
import { useUpdateCollection } from '../../../../utils/reactQueryHooks/collectionHooks/updateCollectionHook';

import { IoMdTrash } from '../../../ReactIcons';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  ProfilePreviewCard,
  AddToCollectionModal,
} from '../../../index';

import {
  CardContainer,
  ImageContainer,
  HeaderContaienr,
  ContentContainer,
} from './index.styles';

const CollectionProductCard = ({ post, collection, refetchUser }) => {
  // CONFIGURATION
  const router = useRouter();
  const { mutate: mutateUpdateCollection } = useUpdateCollection({
    refetchUser,
  });

  let hoverTimer;

  // STATE MANAGEMENT
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const ethPrice = useSelector(selectEthPrice);

  const removeItemHandler = () => {
    const newItemsArr = removeItemFromCollection({
      itemToRemoveId: post?.id,
      itemsArr: collection?.items,
    });

    mutateUpdateCollection({
      collectionId: collection?.id,
      items: newItemsArr,
    });
    console.log(newItemsArr);
  };

  console.log('collectionProductCard-post:', post);
  console.log('collectionProductCard-collection:', collection);

  return (
    <>
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
            <UserIcon user={post?.postedBy} size="s" />

            <Link href={`/users/${post?.postedBy?._id}/listings`}>
              <a>
                <span className="postedBy-name">{post?.postedBy?.name}</span>
              </a>
            </Link>
            {showProfilePreview && (
              <ProfilePreviewCard postByUser={post?.postedBy} />
            )}
          </div>
        </HeaderContaienr>
        <Link
          href={`/products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`}
        >
          <a>
            <ImageContainer>
              <Image
                src={post?.images[0]}
                alt="PRODUCT"
                objectFit="contain"
                objectPosition="center"
                layout="fill"
              />
            </ImageContainer>
          </a>
        </Link>
        <ContentContainer>
          <div className="details">
            <h3 className="title">{post?.title}</h3>
            <div className="price">
              <div className="icon-wrapper">
                <Image
                  src={ethIcon}
                  alt="eth-icon"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
              <div className="value-info">
                <span className="eth-value">{post?.price}</span>
                <span className="item-value">
                  $ {(ethPrice * +post?.price).toFixed(2)}
                </span>
              </div>
            </div>
            <span className="status">Brand New</span>
          </div>
          <div className="buttons-group">
            <button onClick={removeItemHandler} className="like-btn">
              <IoMdTrash size={25} className="icon" />
            </button>
            <Button
              size="m"
              type="button"
              buttonType={BUTTON_TYPES.base}
              onClick={() =>
                router.replace(
                  ` /products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?._id}`
                )
              }
            >
              Details
            </Button>
          </div>
        </ContentContainer>
      </CardContainer>
      <AddToCollectionModal
        postId={post?._id}
        refetchUser={() => {}}
        showAddToColModal={showAddCollectionModal}
        setShowAddToColModal={setShowAddCollectionModal}
      />
    </>
  );
};

export default CollectionProductCard;
