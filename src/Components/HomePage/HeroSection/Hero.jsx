import React from "react";

const Hero = () => {
  return (
    <section className="py-44 min-h-screen w-full bg-white relative">
      {/* graidnet background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      {/* content */}
      <div className="max-w-4xl mx-auto relative z-900">
        <h1 className="text-slate-950 text-center font-grotesk text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold lg:font-bold">
          <span className="">Transform Your Ideas Into</span>
          <br />
          <span className="mt-1">Digital Masterpieces</span>
        </h1>
        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-center my-6 text-lg sm:text-xl md:text-2xl text-gray-700 mb-8">
          We design, develop, and optimize websites and apps that help your
          brand stand out and grow online.
        </p>
      </div>
    </section>
  );
};

export default Hero;
