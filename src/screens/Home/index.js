import React from 'react';
import { doGet } from '../../helpers/ApiHelper'


const Home = () => {
    doGet('').then(console.log)

    return (
        <main>
            <h2>Home</h2>
        </main>
    )
}

export default Home;