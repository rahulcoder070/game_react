import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../style/Navbar.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiHandWithdraw } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useAuth } from '../context/AuthProvider';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [auth, setAuth] = useAuth();

  return (
    <>
    <div className='Navbar'>
      <div className="navbar-container">
        <NavLink to='/'><div className="navlogo"><span>WIN</span>47.IN</div></NavLink>
        <header>
      <SignedOut>
        <SignInButton className='nav-item-button'/>
      </SignedOut>
      <SignedIn>
        {openMenu?
        <IoMdCloseCircleOutline className='nav-menu-close' onClick={()=>setOpenMenu(false)}/>:
        <FaRegCircleUser className='nav-user-profile' onClick={()=>setOpenMenu(true)}/>
      }
      </SignedIn>
    </header>
      </div>
    </div>

{/* Nav-Menu */}
    {openMenu &&
    <div className='nav-menu'>
      <div className="nav-menu-container">
      <SignedIn>
        <div className="nav-menu-profile">
        <UserButton className="nav-menu-profile-image"/>
          <div className="nav-menu-balance">
            <div className="">My Balance</div>
            <div className="nav-menu-price">₹{auth.amount}</div>
          </div>
        </div>
      </SignedIn>
      <Link to='https://chatgpt.com/c/9b582f78-0d1b-4023-9d44-226897a446ee'>
      <button className="nav-menu-item"><span><RiMoneyRupeeCircleLine/></span> AAD CASH</button>
      </Link>
      <NavLink to='/withdraw' onClick={()=> setOpenMenu(false)}>
        <button className="nav-menu-item"><span><PiHandWithdraw/></span> WITHDRAW</button>
      </NavLink>
      <NavLink to='/transactions' onClick={()=> setOpenMenu(false)}>
        <button className="nav-menu-item"><span><FaMoneyBillTransfer/></span> TRANSACTIONS</button>
      </NavLink>
      <button className="nav-menu-item"><span><IoGameControllerOutline/></span>How To Play</button>
      <div className="nav-menu-help">
        <p>Help & Support</p>
        <button className="nav-menu-item"><span><FaTelegramPlane/></span> Telegram</button>
        <button className="nav-menu-item"><span><FaInstagram/></span> Instagram</button>
        <button className="nav-menu-item"><span><FaWhatsapp/></span> Whatshapp</button>
        <button className="nav-menu-item"><span><SiGmail/></span> win47.in@gmail.com</button>
      </div>
      </div>
    </div>}
    </>
  )
}

export default Navbar
