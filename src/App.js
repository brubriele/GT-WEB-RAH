import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
            </div>
            <footer>
                <li><Link to="/">...</Link></li>
                <li><Link to="/detail">...</Link></li>
            </footer>
        </BrowserRouter>
    )
};

export default App;