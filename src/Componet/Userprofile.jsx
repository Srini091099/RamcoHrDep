import React from 'react';
import { useAuth } from './AuthProvider';
import '../Style/Userprofile.css'; 

export default function Userprofile() {
  const { user, logout } = useAuth();

  return (
    <div className="user-profile">
      <span>Welcome, {user}!</span>
      <button className="button1" onClick={logout}>Logout</button>
    </div>
  );
}
