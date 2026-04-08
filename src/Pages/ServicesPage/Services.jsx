/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Services from "../../Components/HomePage/ServiceSection/Services";
import PriceCard from "../../Components/ServicePageComponents/PriceSection/PriceCard";
import ServiceCta from "../../Components/ServicePageComponents/ServiceCtaSection/ServiceCta";

import PageHeader from "../../Components/Shared/OtherPages/OtherPageHeader/PageHeader";
const serviceStats = [
  { label: "Bespoke", value: "Design" },
  { label: "Scalable", value: "Technology" },
];
const ServicePage = () => {
  return (
    <section>
      <PageHeader
        watermark="Services"
        titleFirstLine="Transforming"
        titleSecondLine="Visions Into"
        titleThirdLine="Global Assets."
        subtitle="We deliver bespoke digital ecosystems tailored for high-growth enterprises. Our approach combines precision engineering with sophisticated design."
        stats={serviceStats}
      />

      {/* other section container */}
      <div className=" relative z-9999999">
        <Services />
        <PriceCard />
        <ServiceCta />
      </div>
    </section>
  );
};

export default ServicePage;
