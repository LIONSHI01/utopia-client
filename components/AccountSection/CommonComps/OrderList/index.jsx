import React, { useState, useMemo, useEffect } from 'react';
import { CgSandClock } from 'react-icons/cg';
import { MdDoneAll } from 'react-icons/md';

import { Pagination } from '../../../index';

import {
  ListContainer,
  SelectionContainer,
  ListTable,
  TableHeader,
  ListItemWrapper,
  PaginationWrapper,
} from './index.styles';

import { useSelectOrders } from '../../../../utils/reactQueryHooks/useSelectOrders';

const orderStatus = ['all orders', 'completed', 'continuing', 'cancelled'];
const tableHeader = [
  'order id',
  'item',
  'order date',
  'order value',
  'payment',
  'order activity',
  'order status',
];

const ListItem = ({ order, ...otherProps }) => {
  // STATE MANAGEMENT

  const { id, post, createdAt, value, transaction_validated, status, active } =
    order || {};

  const displayId = id?.slice(0, 5) + '...' + id?.slice(-5);

  return (
    <ListItemWrapper {...otherProps}>
      <div className="order_id">{displayId}</div>
      <div>{post?.title}</div>
      <div>{createdAt?.split('T')[0]}</div>
      <div>{value}&nbsp;ETH</div>
      <div>{transaction_validated ? 'confirmed' : 'pending'}</div>
      <div className="order_activity">
        {status === 'completed' ? (
          <>
            <MdDoneAll size={15} />
            {status}
          </>
        ) : (
          <>
            <CgSandClock size={15} />
            {status}
          </>
        )}
      </div>
      <div className={active ? 'order_active' : 'order_inactive'}>
        {active ? 'Active' : 'Inactive'}
      </div>
    </ListItemWrapper>
  );
};

let PageSize = 3;

const OrderList = ({ orders, setSelectedOrder }) => {
  // CONFIGURATION

  // STATE MANAGEMENT
  const [selectedStatus, setSelectedStatus] = useState('all orders');
  const [currentPage, setCurrentPage] = useState(1);
  const selectStatusOrders = useSelectOrders(orders, selectedStatus);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return selectStatusOrders?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, selectStatusOrders]);

  // !!!Reset Current page whenever selected status change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatus]);

  return (
    <ListContainer>
      <SelectionContainer>
        {orderStatus.map((status, i) => (
          <div
            key={i}
            className={
              selectedStatus === status ? 'status_item selected' : 'status_item'
            }
            onClick={() => setSelectedStatus(status)}
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
          totalCount={selectStatusOrders?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
          fontSize="s"
        />
      </PaginationWrapper>
    </ListContainer>
  );
};

export default OrderList;
