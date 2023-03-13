import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from '../../ReactIcons';

import { ItemWrapper, DropdownWrapper } from './index.styles';

const DropdownWindow = ({ subCategories }) => {
  return (
    <DropdownWrapper>
      {subCategories?.map(({ subCategory, link }) => (
        <Link key={subCategory} href={link}>
          <a className="subCategory-name">
            {subCategory}
            <IoIosArrowForward size={20} className="arrow-icon" />
          </a>
        </Link>
      ))}
    </DropdownWrapper>
  );
};

const CategoryBarItem = ({ item }) => {
  // CONFIGURATION
  // For Delayed Hover effect
  let timer;

  // STATE MANAGEMENT
  const [showMenu, setShowMenu] = useState(false);

  const { category, link, subCategories } = item;

  return (
    <ItemWrapper
      className="category_item"
      onMouseEnter={() => {
        timer = setTimeout(() => setShowMenu(true), 300);
      }}
      onMouseLeave={() => {
        setShowMenu(false);
        clearTimeout(timer);
      }}
    >
      <Link href={link}>
        <a>
          <span className="category_item_text" value={category}>
            {category}
          </span>
        </a>
      </Link>
      {showMenu && <DropdownWindow subCategories={subCategories} />}
    </ItemWrapper>
  );
};

export default CategoryBarItem;
