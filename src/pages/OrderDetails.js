import React, { useState } from 'react';

function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [newOrderId, setNewOrderId] = useState('');

  const addOrder = () => {
    if (newOrderId.trim() !== '') {
      setOrders([...orders, { id: parseInt(newOrderId), status: 'Pending' }]);
      setNewOrderId('');  // Clear the input field after adding
    }
  };

  const removeOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className='status'>
      <h1>Your Orders</h1>
      <div>
        <input
          type="number"
          value={newOrderId}
          onChange={(e) => setNewOrderId(e.target.value)}
          placeholder="Enter Order ID"
        />
        <button onClick={addOrder}>Add Order</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Change Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                >
                  <option value="Delivered">Delivered</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
              <td>
                <button onClick={() => removeOrder(order.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
