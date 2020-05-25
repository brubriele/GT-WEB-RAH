import React from 'react';
import {doGet} from '../../helpers/ApiHelper'


const Home = () => {
    doGet('').then(console.log)

    return <h1>Home</h1>
}

export default Home;