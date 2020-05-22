import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu'

const Header = () => {
    return (
        <>
        <header>
            <h1>Rede de apoio <span>humanitário</span> nas e das periferias</h1>
            <Menu />
        </header>
        </>
    )
};

export default Header;