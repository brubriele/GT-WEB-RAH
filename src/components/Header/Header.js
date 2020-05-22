import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu'
import Logo from '../../assets/logo-rah.png'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <header className="header">
                <nav>
                    <img src={Logo} alt="" srcset="" />
                    <div className="header__group-donation-and-menu">
                        <div className="header__donation">
                            <FontAwesomeIcon icon={faHeart} />
                            <p className="header_donation header_donation--description">como ajudar</p>
                        </div>
                        <Menu />

                    </div>

                </nav>
                {/* <Menu /> */}
            </header>
        </>
    )
};

export default Header;