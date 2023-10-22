import React, { useContext, useState } from 'react';
import logo from '../../src/assets/logo.png';
import { Link } from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');

  const onlineStatus = useOnlinestatus();

  const {loggedInUser} = useContext(UserContext)


  return (
    <div className="flex justify-between items-center shadow-lg bg-pink-100 ">
      <div className="">
        <img className='w-20'
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            Online status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className='px-4'>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4'>
            <Link to="/about">About</Link>
          </li>
          <li className='px-4'>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className='px-4'>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login')
            }>
            {btnNameReact}
          </button>

          <li className='px-4 font-bold'>
            {loggedInUser}
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
