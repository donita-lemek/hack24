import React from 'react';

function OrderList() {
  return (
    <div className="order-list">
      <h2>Your Orders</h2>
      <ul>
        <li>Order #12345 - Delivered</li>
        <li>Order #12346 - In Transit</li>
        <li>Order #12347 - Pending</li>
      </ul>
    </div>
  );
}

export default OrderList;
