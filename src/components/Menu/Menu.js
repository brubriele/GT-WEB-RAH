import React from 'react';
import Hamburger from './Hamburger/Hamburger'
// import './Menu.css';

const Menu = () => {
  return (

    <div id="parent">
      <div className="menu-wrapper">
        <div className="hamburger-menu">
          <Hamburger />
        </div>
      </div>
    </div>
  )
}

export default Menu;