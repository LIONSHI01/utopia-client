import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';

export const updateCollection = async (data, collectionId) => {
  const res = await axios({
    method: 'PATCH',
    url: `${baseURL}/itemCollections/update/${collectionId}`,
    data: {
      items: data,
    },
  });

  console.log(res);
  return res;
};
