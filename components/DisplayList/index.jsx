import React, { useState, useMemo } from 'react';

import { DisplayContainer } from './index.styles';
import { ProductCard, Pagination, ProductCardSkeleton } from '../index';

const PageSize = 20;
const DisplayList = ({ posts, isLoading = true }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return posts?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, posts]);

  if (isLoading)
    return (
      <DisplayContainer>
        {Array.from(Array(currentTableData?.length || 20).keys())?.map(
          (_, i) => (
            <ProductCardSkeleton key={i} />
          )
        )}
      </DisplayContainer>
    );

  return (
    <DisplayContainer>
      {currentTableData?.map((post) => (
        <ProductCard key={post._id} post={post} />
      ))}
      <div className="pagination_box">
        <Pagination
          currentPage={currentPage}
          totalCount={posts?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </DisplayContainer>
  );
};

export default DisplayList;
