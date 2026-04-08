import React from "react";
import Marquee from "react-fast-marquee";
const clientRowOne = [
  { id: 2, src: "/clientLogo/accenture.svg", alt: "accenture" },
  { id: 3, src: "/clientLogo/alibaba.svg", alt: "alibaba" },
  { id: 4, src: "/clientLogo/cineplex.svg", alt: "cineplex" },
  { id: 5, src: "/clientLogo/costco.svg", alt: "costco" },
  { id: 6, src: "/clientLogo/dolby.svg", alt: "dolby" },
  { id: 7, src: "/clientLogo/flormar.svg", alt: "flormar" },
  { id: 9, src: "/clientLogo/sony.svg", alt: "flormar" },
];

const clientRowTwo = [
  { id: 1, src: "/clientLogo/iproyal.svg", alt: "iproyal" },
  { id: 2, src: "/clientLogo/netflix.svg", alt: "netflix" },
  { id: 3, src: "/clientLogo/northone.svg", alt: "alibaba" },
  { id: 4, src: "/clientLogo/odoo.svg", alt: "cineplex" },
  { id: 5, src: "/clientLogo/pexe;s.svg", alt: "costco" },
  { id: 6, src: "/clientLogo/rankmath.svg", alt: "dolby" },
  { id: 7, src: "/clientLogo/runway.svg", alt: "flormar" },
  { id: 8, src: "/clientLogo/salesforce.svg", alt: "flormar" },

  { id: 9, src: " /clientLogo/tubl.svg", alt: "flormar" },
];
const ClientLogo = () => {
  return (
    <div className="max-w-5xl mx-auto py-22">
      {/* title */}
      <h3 className="text-center text-sm xl:text-lg font-inter text-slate-700 py-6 font-semibold xl:font-bold">
        Empowering 1,000+ industry leaders and global innovators.
      </h3>
      {/* logo marquee top-1 */}
      <div className="pt-8">
        <Marquee
          className=""
          gradient={true}
          gradientColor="white"
          speed={50}
          pauseOnHover={true}
        >
          {clientRowOne.map((logo) => (
            <div
              key={logo.id}
              className="mx-12 w-32 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
      {/* logo marquee top-2 */}
      <div className="pt-5">
        <Marquee
          gradient={true}
          gradientColor="white"
          speed={50}
          pauseOnHover={true}
          direction="right"
        >
          {clientRowTwo.map((logo) => (
            <div
              key={logo.id}
              className="mx-12 w-32 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ClientLogo;
