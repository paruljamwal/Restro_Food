import React from 'react'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='head'>
        <div><img className='logo' src={logo} alt="" /> HOME</div>
     <div className='right'>
       
        <div>Cart   <FaShoppingCart/></div>
 </div>
        <div></div>
    </div>
  )
}

export default Header