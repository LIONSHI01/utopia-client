import React, { useState } from 'react';
import Link from 'next/link';

import { IoIosArrowForward } from '../../../ReactIcons';
import { categories } from '../../../../assets/constants';
import { MenuContainer, ListContainer } from './index.styled';
const SidebarMenu = ({ isOpen = true }) => {
  const [categorySelected, setCategorySelected] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  const onSelectCategoryHandler = (category) => {
    setSelectedCategory((prev) => {
      if (category === prev) return '';
      return category;
    });
  };

  return (
    <MenuContainer isOpen={isOpen}>
      <ListContainer>
        <ul className="master_list">
          {categories?.map(
            ({ category, categoryValue, link, subCategories }) => (
              <li
                key={category}
                className={
                  selectedCategory === category
                    ? 'category_list active'
                    : 'category_list'
                }
                onClick={() => onSelectCategoryHandler(category)}
              >
                <div className="category_item">
                  <Link href={link}>
                    <a>{category}</a>
                  </Link>
                  <IoIosArrowForward size={20} className="arrow" />
                </div>
                <ul className="subCategory_list">
                  {subCategories?.map(
                    ({ subCategory, subCategoryValue, link }) => (
                      <li key={subCategory} className="subCategory_item">
                        <Link href={link}>
                          <a>{subCategory}</a>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </ul>
      </ListContainer>
    </MenuContainer>
  );
};

export default SidebarMenu;
