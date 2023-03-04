import React from 'react';
import ClientsSay from './ClientsSay';
import FAQ from './FAQ';
import Header from './Header';
import LatestNews from './LatestNews';
import OurTeam from './OurTeam';
import QualityServices from './QualityServices';

const Home = () => {
    return (
        <div>
            <Header />
            <QualityServices />
            <FAQ></FAQ>
            <LatestNews />
            <OurTeam />
            <ClientsSay />
        </div>
    );
};

export default Home;