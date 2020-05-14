import React from 'react';
import {doGet} from '../../helpers/ApiHelper'


const Home = () => {
    doGet('/catalog/reports?color_slug=tapecaria').then(console.log)

    return <h1>Home</h1>
}

export default Home;