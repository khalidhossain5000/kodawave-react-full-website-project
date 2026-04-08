import React from 'react';
import Hero from '../../Components/HomePage/HeroSection/Hero';
import Services from '../../Components/HomePage/ServiceSection/Services';
import WhyChooseUs from '../../Components/HomePage/WhyChooseUsSection/WhyChooseUs';
import ClientLogo from '../../Components/HomePage/ClientLogoSection/ClientLogo';

const HomePage = () => {
    return (
        <div>
           <Hero/>
           <Services/>
           <WhyChooseUs/>
           <ClientLogo/>
        </div>
    );
};

export default HomePage;