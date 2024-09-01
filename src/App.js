import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from 'src/pages/Home.jsx';
import TrackOrder from 'src/pages/OrderDetails.jsx';
import OrderDetails from 'src/pages/TrackOrder.jsx';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/track" element={<TrackOrder />} />
              <Route path="/orders" element={<OrderDetails />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


