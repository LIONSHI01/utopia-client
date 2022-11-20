export const productLinkGenerator = (post) => {
  return `/products/${post?.category}/${post?.subCategory}/${post?.slug}/${post?.id}`;
};
