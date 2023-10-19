import React, { useState } from 'react';
import logo from '../../src/assets/logo.png';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlineStatus';

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');

  const onlineStatus = useOnlinestatus();


  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')
            }>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
