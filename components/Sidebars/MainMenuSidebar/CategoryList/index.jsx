import React, { useState } from 'react';
import Link from 'next/link';

import { IoIosArrowForward } from '../../../ReactIcons';
import { categories } from '../../../../assets/constants';
import { MenuContainer, ListContainer } from './index.styles.js';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  // console.log({ selectedCategory, selectedSubcategory });

  const onSelectCategoryHandler = (category) => {
    setSelectedCategory((prev) => {
      if (category === prev) return '';
      return category;
    });
  };
  const onSelectSubcategoryHandler = (subCategory) => {
    setSelectedSubcategory((prev) => {
      if (subCategory === prev) return '';
      return subCategory;
    });
  };

  return (
    <ListContainer>
      <h3 className="heading">Explore</h3>
      <ul className="master_list">
        {categories?.map(({ category, categoryValue, link, subCategories }) => (
          <li
            key={category}
            className={
              selectedCategory === category
                ? 'category_list active'
                : 'category_list'
            }
          >
            <div
              className="category_item"
              onClick={() => onSelectCategoryHandler(category)}
            >
              <Link href={link}>
                <a>{category}</a>
              </Link>
              <IoIosArrowForward size={20} className="arrow" />
            </div>
            <div className="subCategory_list">
              {subCategories?.map(({ subCategory, subCategoryValue, link }) => (
                <div key={subCategory}>
                  <Link href={link}>
                    <a
                      className={
                        selectedSubcategory === subCategory
                          ? 'subCategory_item active'
                          : 'subCategory_item'
                      }
                      onClick={() => onSelectSubcategoryHandler(subCategory)}
                    >
                      {subCategory}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default CategoryList;
