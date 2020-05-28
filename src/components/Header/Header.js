import React from 'react';
import './Header.css';
import Logo from '../../assets/logo-rah.png'
import Menu from '../Menu/Menu'
import ButtonDonation from '../ButtonDonation/ButtonDonation';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Sobre from '../../screens/Sobre/index'
import Polos from '../../screens/Polos/index';
import Home from '../../screens/Home/index'

const Header = () => {
    return (
        <BrowserRouter>
            <>
                <header className="header">
                    <nav className="header__navigation-top">
                        <h1>
                            <Link to="/">
                                <img src={Logo} alt="" srcset="" />
                            </Link>

                        </h1>
                        <section className="header__group-donation-and-menu">

                            <Link to="/sobre" className="header__button" >Quem é a RAH</Link>
                            <a className="header__button header__button--donation" href={'https://benfeitoria.com/rededeapoiohumanitario'} target="blank">
                                <ButtonDonation />
                            </a>
                            <Link to="/polos" className="header__button" >Polos</Link>
                        </section>
                        <Menu />
                    </nav>
                </header>
            </>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/sobre" exact>
                    <Sobre />
                </Route>
                <Route path="/polos" exact>
                    <Polos />
                </Route>
            </Switch>
        </BrowserRouter>

    )

};



export default Header;