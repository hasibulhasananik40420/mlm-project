import React from 'react';
import BusinessApps from './BusinessApps';
import ClientsSay from './ClientsSay';
import FAQ from './FAQ';
import Header from './Header';
import Hero from './Hero';
import LatestNews from './LatestNews';
import OurTeam from './OurTeam';
import QualityServices from './QualityServices';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <QualityServices />
            <BusinessApps />
            <FAQ></FAQ>
            <LatestNews />
            <OurTeam />
            <ClientsSay />
        </div>
    );
};

export default Home;