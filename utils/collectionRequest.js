import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const createCollection = async (data, userId) => {
  const res = await axios({
    method: 'POST',
    url: `${baseURL}/itemCollections/create/${userId}`,
    data: {
      name: data,
    },
  });

  console.log(res);
  return res;
};

export const updateCollection = async (data, collectionId) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/itemCollections/update/${collectionId}`,
    data: {
      items: data,
    },
  });

  // console.log(res);
  return res;
};
