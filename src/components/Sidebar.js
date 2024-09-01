import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/track">Shipment Status</Link></li>
          <li><Link to="/orders">Track Shipment</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
