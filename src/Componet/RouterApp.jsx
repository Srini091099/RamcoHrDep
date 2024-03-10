import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection


import CartDetails from './CartDetails';
import Homepage from './Homepage';
import App from '../App';
import Loginform from './Loginform';

export default function RouterApp() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/cart/:id" element={<CartDetails />} />
        <Route path="/login" element={<Loginform />} />
      
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}
