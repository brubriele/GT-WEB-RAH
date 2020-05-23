import React from 'react';
import './Header.css';
import Logo from '../../assets/logo-rah.png'
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from '../Menu/Menu'

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__navigation-top">
                    <img src={Logo} alt="" srcset="" />

                    <section className="header__group-donation-and-menu">
                        <div>
                            <a href={'https://benfeitoria.com/rededeapoiohumanitario'} target="blank">
                                <div className="header__donation">
                                    <FontAwesomeIcon icon={faHeart} />
                                    <p className="header_donation header_donation--description">como ajudar</p>
                                </div>
                            </a>
                        </div>
                        <Menu />

                    </section>
                </nav>
            </header>
        </>

    )

};

export default Header;