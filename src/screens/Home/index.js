import React from 'react';
import MainBanner from '../../components/MainBanner/MainBanner'
import { doGet } from '../../helpers/ApiHelper'
import '../../App.css'


const Home = () => {
    doGet('').then(console.log)

    return (
        <>
            <main>
                <MainBanner />
            </main>
        </>
    )
}

export default Home;