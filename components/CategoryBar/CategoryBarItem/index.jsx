import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

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
  // STATE MANAGEMENT
  const [showMenu, setShowMenu] = useState(false);

  const { category, link, subCategories } = item;

  return (
    <ItemWrapper
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <Link href={link}>
        <a>
          <span>{category}</span>
        </a>
      </Link>
      {showMenu && <DropdownWindow subCategories={subCategories} />}
    </ItemWrapper>
  );
};

export default CategoryBarItem;
