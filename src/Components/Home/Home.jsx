import React from 'react'
import Hero from './Hero';
import Popular from './Popular';
import Offers from './Offers';
import NewCollection from './NewCollection';
import NewsLetters from './NewsLetters';

const Home = () => {
    return (
        <>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection />
            <NewsLetters />
        </>
    )
}

export default Home;