import React from 'react';
import Userprofile from './Userprofile';
import { useAuth } from './AuthProvider'; 
import '../Style/Navbar.css'; 
import ramcoimg from '../asset/ramco.png';

export default function Navbar() {
  const { logout } = useAuth(); 
  
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      <nav className='nav'>
        <div className="nav_box">
          <div className="my_shop">
            <img src={ramcoimg} className="fingerOverlay" alt="Finger" />
            <span >Ram</span>
            <span className="text-warning">co</span>
          </div>
        </div>
        
        <span className="profile_icon" onClick={logout}> 
          <Userprofile />
        </span>
      </nav>
    </>
  );
}
