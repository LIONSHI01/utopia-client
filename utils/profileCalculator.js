/* **********COLLECTION ITEMS********* */
export const newCollectionItems = (itemsList, targetItemId) => {
  const existingItem = !!itemsList.filter((item) => item._id === targetItemId)
    .length;

  if (existingItem) {
    return itemsList.filter((item) => item._id !== targetItemId);
  }

  return [...itemsList, targetItemId];
};

export const isItemLiked = (postLikedCollection, currentUserId) => {
  const isLiked = !!postLikedCollection?.filter(
    (collection) => collection.postedBy === currentUserId
  ).length;

  return isLiked;
};

export const removeItemFromCollection = ({ itemToRemoveId, itemsArr }) => {
  const newItemsArr = itemsArr.filter((item) => item?.id !== itemToRemoveId);

  return newItemsArr;
};

/* **********FOLLOWINGS********* */
export const newFollowingsCalculator = (followingsList, followUserId) => {
  const existingFollowing = !!followingsList?.filter(
    (item) => item === followUserId
  ).length;

  if (existingFollowing) {
    return followingsList?.filter((item) => item !== followUserId);
  }

  return [...followingsList, followUserId];
};

export const validateFollowingUser = (userFollowingsList, postCreatorId) => {
  const isFollowing = !!userFollowingsList?.filter(
    (followingId) => followingId === postCreatorId
  ).length;

  return isFollowing;
};
