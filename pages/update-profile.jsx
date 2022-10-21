import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';

const uploadRequest = (data, userEmail) =>
  axios({
    method: 'POST',
    url: 'http://localhost:3001/api/v1/users/update-profile',
    headers: { 'Content-Type': 'multipart/form-data', email: userEmail },
    data,
  });

const CreatePost = () => {
  const { data: user } = useSession();

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const uploadHandler = () => {
    const uploadPromises = images?.map((image) => {
      let form = new FormData();
      form.append('image', image.file);
      return uploadRequest(form, user?.user.email);
    });

    axios
      .all(uploadPromises)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <button onClick={uploadHandler}>Upload</button>
    </div>
  );
};

export default CreatePost;
