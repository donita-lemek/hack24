import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import OrderDetails from './pages/OrderDetails';
import TrackOrder from './pages/TrackOrder';
import Footer from './components/Footer';
import Tracker  from './pages/Tracker';
import BatchShipping from './pages/BatchShipping';
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
              <Route path="/tracker" element={<Tracker/>} />
              <Route path="/batchshipping" element={<BatchShipping/>} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


