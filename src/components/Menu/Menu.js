import React from 'react';
import Hamburger from './Hamburger/Hamburger'
// import './Menu.css';

const Menu = () => {
  return (

    <div id="parent">
      <div class="menu-wrapper">
        <div class="hamburger-menu"></div>
        <Hamburger />
      </div>
    </div>
  )
}

export default Menu;