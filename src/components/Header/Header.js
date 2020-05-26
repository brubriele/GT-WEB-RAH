import React from 'react';
import './Header.css';
import Logo from '../../assets/logo-rah.png'
import Menu from '../Menu/Menu'
import ButtonDonation from '../ButtonDonation/ButtonDonation'

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="header__navigation-top">
                    <h1>
                        <img src={Logo} alt="" srcset="" />

                    </h1>
                    <section className="header__group-donation-and-menu">

                        <a className="header__button" href={'https://benfeitoria.com/rededeapoiohumanitario'}>Quem é a RAH</a>
                        <a className="header__button header__button--donation" href={'https://benfeitoria.com/rededeapoiohumanitario'} target="blank">
                            <ButtonDonation />
                        </a>
                        <a className="header__button" href={'https://benfeitoria.com/rededeapoiohumanitario'}>Polos</a>
                    </section>
                    <Menu />
                </nav>
            </header>
        </>

    )

};

export default Header;