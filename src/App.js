import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';  
import Header from './components/Header/Header';

import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
        <div className="container"> 
            <Header />
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/detail">Detail</Link></li>
        </ul>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/detail">
                    <Detail />
                </Route>

            </Switch>
        </BrowserRouter>
    )
};

export default App;