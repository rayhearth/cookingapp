import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Cooking from '../components/Cooking';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Search />
            <Cooking />
        </div>
    );
};

export default Home;