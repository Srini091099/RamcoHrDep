import React from 'react';
import '../Style/Slidebar.css';
import Userprofile from './Userprofile';
import { useAuth } from './AuthProvider';
import { Link } from 'react-router-dom';

export default function Sliderbar() {
  const { authenticated, login } = useAuth(); 

  return (
    <nav className='navbar'>
      <span className="nav-title">RAM<span className="">CO</span></span>
      {authenticated && (
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/home' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <a href='/About' className='nav-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Feedback</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Todo</a>
          </li>
        </ul>
      )}
      <div className="nav-user-profile">
        {authenticated ? <Userprofile /> : <button onClick={login}>Login</button>}
      </div>
    </nav>
  );
}
