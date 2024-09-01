import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/track">Track Order</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
