export const newCollectionItems = (itemsList, targetItem) => {
  const existingItem = itemsList.find((item) => item === targetItem);

  if (existingItem) {
    return itemsList.filter((item) => item !== targetItem);
  }

  return [...itemsList, targetItem];
};
