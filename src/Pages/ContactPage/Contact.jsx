import React from 'react';
import PageHeader from '../../Components/Shared/OtherPages/OtherPageHeader/PageHeader';
import ContactForm from '../../Components/ContactPageComponets/ContactForm/ContactForm';
import ConsultationCTA from '../../Components/ContactPageComponets/ConsultationCTA/ConsultationCTA';
import OfficeLocation from '../../Components/ContactPageComponets/LocationMap/Map';

const ContactPage = () => {

    const contactStats = [
        { label: "24h", value: "Response Time" },
        { label: "Free", value: "Consultation" }
    ];

    return (
        <div className="bg-[#fbf6f6] overflow-hidden">
            <PageHeader 
                watermark="CONTACT" 
                titleFirstLine="Start Your" 
                titleSecondLine="Digital" 
                titleThirdLine="Ascension" 
                subtitle="Have a vision? We have the technical mastery. Whether it's a high-end web platform, a 3D motion masterpiece, or a scalable SaaS, reach out to architect your digital authority."
                stats={contactStats}
            />

            
            <div className="py-20 ">
              <ContactForm/>
              <ConsultationCTA/>
              <OfficeLocation/>
            </div>
        </div>
    );
};

export default ContactPage;