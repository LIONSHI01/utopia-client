import { useState, useEffect } from 'react';

export const useSelectOrders = (orders, orderStatus) => {
  const [selectStatusOrders, setSelectStatusOrders] = useState(orders);

  useEffect(() => {
    switch (orderStatus) {
      case 'all orders':
        setSelectStatusOrders(orders);
        break;
      case 'cancelled':
        setSelectStatusOrders(
          orders?.filter(
            (order) => !order.active && order.status !== 'completed'
          )
        );
        break;
      case 'completed':
        setSelectStatusOrders(
          orders?.filter((order) => order.status === 'completed')
        );
        break;
      case 'continuing':
        setSelectStatusOrders(
          orders?.filter(
            (order) => order.active && order.status !== 'completed'
          )
        );
    }
  }, [orders, orderStatus]);

  return selectStatusOrders;
};
