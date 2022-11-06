import React, { useMemo, useState } from 'react';

import { ReviewBoxContainer, ReviewsList } from './index.styles';
import { ReviewItem, Pagination } from '../../index';

let PageSize = 3;

const ReviewBox = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return reviews?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, reviews]);

  return (
    <ReviewBoxContainer>
      <h4 className="heading">{reviews?.length} reviews on this item</h4>
      <ReviewsList>
        {currentTableData?.map((review) => (
          <ReviewItem key={review?.id} review={review} />
        ))}
      </ReviewsList>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={reviews?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </ReviewBoxContainer>
  );
};

export default ReviewBox;
