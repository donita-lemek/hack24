import React from 'react';
import '../App.css';

function Dashboard() {
  return (
    
      <div className='front-page'>
    <div className="dashboard">
      <h2>Welcome to the Logistics Dashboard</h2>
      <p>Overview of your logistics operations.</p>
    </div>
    <div className='dashboard'>
    <a href='../BatchShipping'><button className='btns'>Batch Shipping</button></a>
    <a href='/track'><button className='btns'>Track Shipment</button></a>
    </div>
    <div>

    </div>
    </div>
  );
}

export default Dashboard;
