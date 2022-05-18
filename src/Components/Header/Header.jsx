import React from 'react'
import './Header.css'
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='head'>
        <div><img className='logo' src={logo} alt="" /> HOME</div>
     <div className='right'>
     <div>SIGNIN</div>
        <div>Cart</div>
 </div>
        <div></div>
    </div>
  )
}

export default Header