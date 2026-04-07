import React from "react";

const SecondaryButton = ({ children, className, bgColor = "#f9fafb" }) => {
  return (
    <button
      className={`bg-[${bgColor}] ${className} border py-2.5  text-surface-900 font-inter font-medium cursor-pointer transition duration-500 xl:px-16`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
