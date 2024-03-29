import React from 'react';

import { FaChevronRight, FaChevronLeft } from '../ReactIcons';
import { usePagination, DOTS } from '../../utils/customHooks/usePagination';

import { PaginationContainer } from './index.styles';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    fontSize = 'm',
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];
  return (
    <PaginationContainer fontSize={fontSize}>
      <li
        className={
          currentPage === 1 ? 'pagination-item disabled' : 'pagination-item'
        }
        onClick={onPrevious}
      >
        {/* <div className="arrow left" /> */}
        <FaChevronLeft size={15} />
      </li>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li key={i} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={i}
            className={
              pageNumber === currentPage
                ? 'pagination-item selected'
                : 'pagination-item'
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          currentPage === lastPage
            ? 'pagination-item disabled'
            : 'pagination-item'
        }
        onClick={onNext}
      >
        {/* <div className="arrow right" /> */}
        <FaChevronRight size={15} />
      </li>
    </PaginationContainer>
  );
};

export default Pagination;
