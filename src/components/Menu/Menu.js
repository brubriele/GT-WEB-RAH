import React, { useState } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { menuData } from '../../menu-data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Menu.css';


const Menu = () => {
    const [state, setState] = useState(false);



    function toggle() {
        setState(!state);
    }


    return (
        <>
            <div className="container-menu">
                <div className="menu-button" onClick={toggle}>
                    <FontAwesomeIcon icon={state ? faTimes : faBars} />
                </div>
                {/* Sidebar */}
                {menuData.length && (
                    <nav id="mySidenav" className="menu-navigation">
                        <ul className={`menu-navigation__items ${state ? 'show' : 'hide'}`}>
                            {menuData.map(item => (
                                <li className="menu-navigation__list" key={item.label}>
                                    <a className="menu-navigation__link" href={item.url}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>

        </>

    )

};

export default Menu;


