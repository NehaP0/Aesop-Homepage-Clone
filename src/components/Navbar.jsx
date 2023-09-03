import React from 'react'
import Favicon from "react-favicon";

const Navbar = () => {
  
  return (
    <div id='Navbar'>
        <div id='Navleft'>
            <a href="">Skin Care</a>
            <a href="">Body & Hand</a>
            <a href="">Hair</a>
            <a href="">Fragrance</a>
            <a href="">Home</a>
            <a href="">Kits & Travel</a>
            <a href="">Gifts</a>
            <a href="">Shop</a>
            <a href="">Read</a>
            <a href="">Stores</a>
            <a href="">Facial Appointments</a>
            <img src="https://img.icons8.com/?size=512&id=LnlEQU5pxlIU&format=png" alt="Search" id='search'/>
        </div>
        <div id='Navright'>
            <a href="">Log in</a>
            <a href="">Cabinet</a> 
            <a href="">Cart</a>  
        </div> 
    
    </div>
  )
}

export default Navbar