import React from 'react';
import './Tracking.css';

function Tracking() {
  return (
    <div className="tracking">
      <h2>Track your Order</h2>
      <input type="text" placeholder="Enter tracking number" />
      <button>Track</button>
    </div>
  );
}

export default Tracking;
