import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />


            </div>
        </BrowserRouter>
    )
};

export default App;