import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Navbar.css'
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="navbar-container">
        <NavLink to='/'><div className="navlogo"><span>WIN</span>47.IN</div></NavLink>
        <button className='nav-item-button'>Login / Signup</button>
      </div>
    </div>
  )
}

export default Navbar
