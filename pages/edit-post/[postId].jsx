import React, { useState, useEffect } from 'react';

import { useSession } from 'next-auth/react';
import ImageUploading from 'react-images-uploading';
import Image from 'next/image';
import { BsArrowClockwise } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiTrash } from 'react-icons/fi';
import { getPostDetails } from '../../utils/postRequest';
import { Button, PostEditForm } from '../../components';

import {
  EditPostContainer,
  OutterContainer,
  ImageSection,
  FormSection,
  UploadImageWrapper,
  PreviewWrapper,
  ImageItem,
} from '../../pages_styles/edit-post.styles';

const EditPostPage = ({ post, postId }) => {
  // CONFIGURATION

  console.log(post);
  // console.log(data);
  const maxNumber = 10;
  // const testImages = [
  //   'https://utopia-image-storage.s3.ap-southeast-1.ama…9e48944-7ee04db6-8bcc-4a8b-aaf0-0096fa4a332e.jpeg',
  //   'https://utopia-image-storage.s3.ap-southeast-1.ama…f4b-4fbc-9abb-5779f1b11254-27ARISTOTLE-jumbo.jpeg',
  //   'https://utopia-image-storage.s3.ap-southeast-1.ama…12cf3015-df6d-44a0-ac31-f8a234eb5829-cicero1.jpeg',
  // ];
  // STATE MANAGEMENT
  const [images, setImages] = useState(post?.images);
  console.log('Preset:', images);
  // HANDLERS
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <EditPostContainer>
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
                    <span>(up to 10 photos)</span>
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
                            src={image['data_url'] || image}
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
          <PostEditForm post={post} images={images} />
        </FormSection>
      </OutterContainer>
    </EditPostContainer>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { postId } = query;
  const post = await getPostDetails(postId);

  return {
    props: {
      postId,
      post,
    },
  };
};

export default EditPostPage;
