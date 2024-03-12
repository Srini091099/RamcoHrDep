import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 


import CartDetails from './CartDetails';
import Homepage from './Homepage';
import App from '../App';


import SmartFeedback from './Smartfeedback';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cart/:id" element={<CartDetails />} />
        <Route path="/Login" element={<App />} />
        <Route path="/Feed" element={<SmartFeedback />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}
