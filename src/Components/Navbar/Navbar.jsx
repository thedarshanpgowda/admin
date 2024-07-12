import React from 'react'
import './Navbar.css'
import logo from "../Assets/logo.png";

import navprofileIcon from '../Assets/nav-profile.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="header">
      <img src={logo} alt="" />
      </div>
      
      <img src={navprofileIcon} className='nav-profile' alt="" onClick={()=>{
        
      }}/>
      <Link to = {"/login"} className="container">
        Login
      </Link>
    </div>
  )
}

export default Navbar
