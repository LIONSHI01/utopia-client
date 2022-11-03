export const newCollectionItems = (itemsList, targetItemId) => {
  const existingItem = itemsList.find((item) => item._id === targetItemId);

  if (existingItem) {
    return itemsList.filter((item) => item !== targetItemId);
  }

  return [...itemsList, targetItemId];
};
