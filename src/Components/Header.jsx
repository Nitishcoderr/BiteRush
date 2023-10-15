import React, { useState } from 'react'
import logo from '../../src/assets/logo.png'
import '../style/Header.css'

const Header = () => {


  const [btnNameReact, setbtnNameReact] = useState("Login")
 

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
            <button className='login' onClick={()=> btnNameReact === "Login" ? setbtnNameReact('Logout') :setbtnNameReact("Login") } >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
