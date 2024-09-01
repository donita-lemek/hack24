import React from 'react';


function Tracking() {
  return (
    <div className="tracking">
      <h2>Track your Shipment</h2>
      <input type="text" placeholder="Enter tracking number" />
      <a href='./Tracker'>
      <button >Track</button>
      </a>
    </div>
  );
}

export default Tracking;
