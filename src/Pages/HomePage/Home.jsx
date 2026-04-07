import React from 'react';
import Hero from '../../Components/HomePage/HeroSection/Hero';
import Services from '../../Components/HomePage/ServiceSection/Services';
import WhyChooseUs from '../../Components/HomePage/WhyChooseUsSection/WhyChooseUs';

const HomePage = () => {
    return (
        <div>
           <Hero/>
           <Services/>
           <WhyChooseUs/>
        </div>
    );
};

export default HomePage;