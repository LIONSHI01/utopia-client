import React from 'react';
import Link from 'next/link';

import { MapWrapper } from './index.styles';

const NavigationMap = ({ categoryValue, subCategoryValue, postTitle }) => {
  const category = categoryValue?.replace('-', ' & ');
  const subCategory = subCategoryValue?.replace('-', ' & ');

  return (
    <MapWrapper>
      <div className="links">
        <Link href="/">
          <a>Utopia</a>
        </Link>
        <span>/</span>
        <Link href={`/products/${categoryValue}`}>
          <a>{category}</a>
        </Link>
        {subCategory && (
          <>
            <span>/</span>
            <Link href={`/products/${categoryValue}/${subCategoryValue}`}>
              <a>{subCategory}</a>
            </Link>
          </>
        )}
        {postTitle && (
          <>
            <span>/</span>
            <span className="post-title">{postTitle}</span>
          </>
        )}
      </div>
    </MapWrapper>
  );
};

export default NavigationMap;
