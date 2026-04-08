import React from 'react';
import Hero from '../../Components/HomePage/HeroSection/Hero';
import Services from '../../Components/HomePage/ServiceSection/Services';
import WhyChooseUs from '../../Components/HomePage/WhyChooseUsSection/WhyChooseUs';
import ClientLogo from '../../Components/HomePage/ClientLogoSection/ClientLogo';
import Testimonial from '../../Components/HomePage/TestimonialSection/Testimonial';
import CallToAction from '../../Components/HomePage/CallToActionSection/CallToAction';

const HomePage = () => {
    return (
        <div>
           <Hero/>
           <Services/>
           <WhyChooseUs/>
           <ClientLogo/>
           <Testimonial/>
           <CallToAction/>
        </div>
    );
};

export default HomePage;