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
          {/* <li className='nav-item'>
            <a href='/About' className='nav-link'>About</a>
          </li> */}
          <li className='nav-item'>
            <Link to='/Feed'  className='nav-link'>SmartFeedback</Link>
          </li>
          {/* <li className='nav-item'>
            <a href='/Todoo' className='nav-link'>Todo</a>
          </li> */}
        </ul>
      )}
      <div className="nav-user-profile">
        {authenticated ? <Userprofile /> : <Link to='/Login'  className="button" onClick={login}>Login</Link>}
      </div>
    </nav>
  );
}
