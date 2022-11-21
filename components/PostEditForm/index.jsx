import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { IoIosArrowDown } from 'react-icons/io';

import { Button, BUTTON_TYPES } from '../index';
import { FormContainer } from './index.styles';
import { categories } from '../../assets/constants';
import { updatePost } from '../../utils/postRequest';
import { useGetEthHook } from '../../utils/customHooks/ethQueryHook';
import EthIcon from '../../assets/image/eth-icon.png';

const INITIAL_FORM_FIELDS = {
  category: '',
  subCategory: '',
  brand: '',
  title: '',
  description: '',
  price: '',
};

const PostEditForm = ({ post, images }) => {
  // CONFIGURATION
  const { data: user } = useSession();
  const router = useRouter();
  const ethQuote = useGetEthHook();

  // STATE MANAGEMENT
  const [formFields, setFormFields] = useState(post);

  const { title, category, subCategory, brand, price, description } =
    formFields;

  const { isLoading: isSaving, mutate: mutateUpdatePost } = useMutation(
    updatePost,
    {
      onSuccess: () => {
        setFormFields(INITIAL_FORM_FIELDS);
        router.push('/');
        toast.success('Congretulations! Your item is saved.');
      },
      onError: (err) => {
        console.log('From mutation', err);
      },
    }
  );

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (images.length === 0)
      return toast.error(
        'It is highly recommended to provide images for your item.'
      );

    let form = new FormData();
    // Append Images into FormData
    images
      .filter((image) => image.file)
      .forEach((image) => form.append('images', image.file));
    // Append Other Post data into FormData
    form.append('category', category);
    form.append('subCategory', subCategory);
    form.append('brand', brand);
    form.append('title', title);
    form.append('description', description);
    form.append('price', price);

    // Send Request
    mutateUpdatePost({ data: form, postId: post?._id });
  };

  // Create POST

  return (
    <FormContainer>
      <form className="post-form" onSubmit={onSubmitHandler}>
        <div className="category">
          <label htmlFor="category">Category</label>
          <div className="field-cover">
            <select
              id="category"
              name="category"
              required
              value={category}
              onChange={onChangeHandler}
            >
              <option>Select a category</option>
              {categories?.map((category) => (
                <option
                  key={category.categoryValue}
                  value={category.categoryValue}
                >
                  {category.category}
                </option>
              ))}
            </select>
            <IoIosArrowDown size={20} className="dropdownIcon" />
          </div>
        </div>
        {category && (
          <>
            <div className="subCategory">
              <label htmlFor="subCategory">SubCategory</label>
              <div className="field-cover">
                <select
                  id="subCategory"
                  name="subCategory"
                  required
                  value={subCategory}
                  onChange={onChangeHandler}
                >
                  <option>
                    {category?.length > 1
                      ? 'Select One'
                      : 'Select Category first'}
                  </option>
                  {categories
                    ?.filter((item) => item.categoryValue === category)[0]
                    ?.subCategories?.map((subCategory) => (
                      <option
                        key={subCategory.subCategoryValue}
                        value={subCategory.subCategoryValue}
                      >
                        {subCategory.subCategory}
                      </option>
                    ))}
                </select>
                <IoIosArrowDown size={20} className="dropdownIcon" />
              </div>
            </div>
            <div className="brand">
              <label htmlFor="brand">Brand</label>
              <div className="field-cover">
                <input
                  id="brand"
                  name="brand"
                  required
                  value={brand}
                  placeholder="Brand of your listing"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="title">
              <label htmlFor="title">Title</label>
              <div className="field-cover">
                <input
                  id="title"
                  name="title"
                  required
                  value={title}
                  placeholder="Name your listing"
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="description">
              <label htmlFor="description">Description</label>
              <div className="field-cover">
                <textarea
                  id="description"
                  name="description"
                  required
                  placeholder="Describe your listing"
                  value={description}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="price">
              <label htmlFor="price">{`Price (Paied in Ethereum) $${(
                ethQuote * price
              )?.toFixed(2)}`}</label>
              <div className="priceInputField">
                <div className="field-cover">
                  <div className="icon-wrapper">
                    <Image
                      src={EthIcon}
                      alt="eth-icon"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <span>&nbsp;Ethereum</span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    required
                    value={price}
                    placeholder="Price of your listing"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div className="buttons-group">
              <Button isLoading={isSaving} type="submit" size="full">
                Save
              </Button>
              <Button
                size="full"
                type="button"
                buttonType={BUTTON_TYPES.outlineGrey}
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </form>
    </FormContainer>
  );
};

export default PostEditForm;
