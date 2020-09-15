import React, { useState,useEffect } from 'react';
import './Nav.css';

const Nav = () => {

     const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 100){
              handleShow(true);
          } else {
              handleShow(false);
          }
      })
      return () => {
          window.removeEventListener('scroll')
      }
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
        <img
        className='nav_logo'
        src='Netflix.jpg'
        alt = 'Netflix Logo' />

        <img
        className='nav_avatar'
        src='Netflix.png'
        alt = 'Netflix Logo' />
            
        </div>
    )
}

export default Nav
