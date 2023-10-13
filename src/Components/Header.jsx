import React from 'react'
import logo from '../../src/assets/logo.png'
import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
