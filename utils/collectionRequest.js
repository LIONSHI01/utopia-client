import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createCollection = async ({ data, userId }) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/itemCollections/create/${userId}`,
    data: {
      name: data,
    },
  });

  return res;
};

export const updateCollection = async ({ name, items, collectionId }) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/itemCollections/update/${collectionId}`,
    data: {
      items: items && items,
      name: name && name,
    },
  });

  // console.log(res);
  return res;
};

export const deleteCollection = async (collectionId) => {
  const res = await axios({
    method: 'DELETE',
    url: `${baseURL}/itemCollections/${collectionId}`,
  });

  return res;
};
