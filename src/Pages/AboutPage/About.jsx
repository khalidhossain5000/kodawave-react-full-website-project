import React from "react";
import PageHeader from "../../Components/Shared/OtherPages/OtherPageHeader/PageHeader";
import TeamStrategy from "../../Components/AboutPage/TeamStrategy/TeamStrategy";
import Achievements from "../../Components/AboutPage/AchievmentSection/Achievments";
import ClientStats from "../../Components/AboutPage/ClientStatisticsSection/ClientStats";
import Testimonial from "../../Components/HomePage/TestimonialSection/Testimonial";
const aboutStats = [
  { label: "Global", value: "Standards" },
  { label: "Elite", value: "Execution" },
];
const AboutPage = () => {
  return (
    <div>
      <PageHeader
        watermark="About Us"
        titleFirstLine="Architecting"
        titleSecondLine="Digital"
        titleThirdLine="Authority."
        subtitle="We are a collective of strategists and engineers dedicated to transforming ambitious visions into scalable digital legacies. Our expertise lies in the intersection of cutting-edge technology and high-impact brand strategy."
        stats={aboutStats}
      />

      <TeamStrategy/>

      <Achievements/>

      <ClientStats/>


      <Testimonial/>
    </div>
  );
};

export default AboutPage;
