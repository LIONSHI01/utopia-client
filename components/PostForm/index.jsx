import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { useSession } from 'next-auth/react';

import { Button, BUTTON_TYPES } from '../index';
import { FormContainer } from './index.styles';
import { categories } from '../../assets/constants';
import { createPost } from '../../utils/accountRequest';

const INITIAL_FORM_FIELDS = {
  category: '',
  subCategory: '',
  brand: '',
  title: '',
  description: '',
  price: '',
};

const PostForm = ({ images }) => {
  // CONFIGURATION
  const { data: user } = useSession();

  // STATE MANAGEMENT
  const [formFields, setFormFields] = useState(INITIAL_FORM_FIELDS);
  const [isListing, setIsListing] = useState(false);

  const { title, category, subCategory, brand, price, description } =
    formFields;

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    setIsListing(true);
    e.preventDefault();
    let form = new FormData();
    // Append Images into FormData
    images.forEach((image) => form.append('images', image.file));
    // Append Other Post data into FormData
    form.append('category', category);
    form.append('subCategory', subCategory);
    form.append('brand', brand);
    form.append('title', title);
    form.append('description', description);
    form.append('price', price);
    form.append('postedBy', user?.profile._id);

    // Send Request
    await createPost(form);
    setIsListing(false);
  };
  console.log(formFields);

  return (
    <FormContainer>
      <form
        className="post-form"
        onSubmit={onSubmitHandler}
        // enctype="multipart/form-data"
      >
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
              <label htmlFor="price">Price</label>
              <div className="priceInputField">
                <div className="field-cover">
                  <span>US&nbsp;$</span>
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
            <Button type="submit" size="x">
              {isListing ? 'Listing' : 'List Now'}
            </Button>
          </>
        )}
      </form>
    </FormContainer>
  );
};

export default PostForm;
