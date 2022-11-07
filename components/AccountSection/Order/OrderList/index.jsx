import React, { useState, useMemo } from 'react';

import { Pagination } from '../../../index';
import {
  ListContainer,
  SelectionContainer,
  ListTable,
  TableHeader,
  ListItemWrapper,
  ItemsDisplay,
  PaginationWrapper,
} from './index.styles';

const orderStatus = ['all orders', 'completed', 'continuing', 'canceled'];
const tableHeader = [
  'order id',
  'item',
  'order date',
  'order value',
  'payment',
  'order status',
];

const ListItem = ({ order, ...otherProps }) => {
  const { id, post, createdAt, value, transaction_validated, status } =
    order || {};

  const displayId = id?.slice(0, 5) + '...' + id?.slice(-5);

  return (
    <ListItemWrapper {...otherProps}>
      <div>{displayId}</div>
      <div>{post?.title}</div>
      <div>{createdAt?.split('T')[0]}</div>
      <div>{value}&nbsp;ETH</div>
      <div>{transaction_validated ? 'confirmed' : 'pending'}</div>
      <div>{status}</div>
    </ListItemWrapper>
  );
};

let PageSize = 2;
const OrderList = ({ orders, setSelectedOrder }) => {
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orders?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, orders]);

  return (
    <ListContainer>
      <SelectionContainer>
        {orderStatus.map((status, i) => (
          <div
            key={i}
            className={
              selectedStatus === i ? 'status_item selected' : 'status_item'
            }
            onClick={() => setSelectedStatus(i)}
          >
            {status}
          </div>
        ))}
      </SelectionContainer>

      <ListTable>
        <TableHeader>
          {tableHeader.map((header) => (
            <div key={header}>{header}</div>
          ))}
        </TableHeader>

        {currentTableData?.map((order) => (
          <ListItem
            key={order?.id}
            order={order}
            onClick={() => setSelectedOrder(order)}
          />
        ))}
      </ListTable>
      <PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalCount={orders?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </PaginationWrapper>
    </ListContainer>
  );
};

export default OrderList;
