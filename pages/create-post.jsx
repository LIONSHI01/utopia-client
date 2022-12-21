import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ImageUploading from 'react-images-uploading';

import {
  FiTrash,
  BsArrowClockwise,
  HiOutlineLightBulb,
} from '../components/ReactIcons';

import { Button, PostForm } from '../components';

import {
  CreatePostContainer,
  OutterContainer,
  ImageSection,
  FormSection,
  UploadImageWrapper,
  PreviewWrapper,
  ImageItem,
} from '../pages_styles/create-post.styles';

const CreatePost = () => {
  // CONFIGURATION

  const maxNumber = 10;

  // STATE MANAGEMENT
  const [images, setImages] = useState([]);

  // HANDLERS
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <CreatePostContainer>
      <Head>
        <title>Utopia - Create post</title>
      </Head>
      <OutterContainer>
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
            <ImageSection>
              <UploadImageWrapper
                images={images}
                isDragging={isDragging}
                {...dragProps}
              >
                <div className="dropping-area">
                  <div className="inner-box">
                    <Button size="x" onClick={onImageUpload}>
                      Select Images
                    </Button>
                    <p>or drag photos here</p>
                    <span>(up to 10 photos, accept JPG, PNG only)</span>
                  </div>
                </div>
              </UploadImageWrapper>
              <PreviewWrapper>
                <div className="reminder">
                  <div className="reminder-box">
                    <HiOutlineLightBulb size={17} color="var(--white)" />
                  </div>
                  <p>The first image will be the cover image of your post</p>
                </div>
                <div className="preview-area">
                  {imageList.map((image, index) => (
                    <ImageItem key={index} index={index}>
                      <div className="preview-box">
                        {index === 0 && <p className="cover-text">COVER</p>}
                        <div className="preview-image-container">
                          <Image
                            src={image['data_url']}
                            alt={index}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                          <div className="image-index">{index + 1}</div>
                          <div className="buttons-group">
                            <button
                              onClick={() => onImageUpdate(index)}
                              className="update-btn"
                            >
                              <BsArrowClockwise
                                size={15}
                                className="btn-icon"
                              />
                            </button>
                            <button
                              onClick={() => onImageRemove(index)}
                              className="delete-btn"
                            >
                              <FiTrash size={15} className="btn-icon" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </ImageItem>
                  ))}
                </div>
              </PreviewWrapper>
            </ImageSection>
          )}
        </ImageUploading>
        <FormSection>
          <PostForm images={images} />
        </FormSection>
      </OutterContainer>
    </CreatePostContainer>
  );
};

export default CreatePost;
