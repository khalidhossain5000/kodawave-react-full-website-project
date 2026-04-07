import React from "react";

const PrimaryButton = ({
  children,
  icon: Icon,
  bgGradient = "from-[#e5dafd] to-[#c1cbfc]",
  shadow = "shadow-lg shadow-[#5b2eff30]",
  border = "border-[#8a8af5]",
  textColor = "text-[#242734]",
  className = "",
}) => {
  return (
    <button
      className={`
        relative cursor-pointer overflow-hidden
        bg-linear-to-b ${bgGradient} 
        ${shadow} 
        hover:brightness-105 transition-all 
        px-8 py-3 rounded-xl 
        border ${border} 
        ${textColor} font-semibold group
        ${className}
      `}
    >
      <div className="relative h-6 overflow-hidden">
        <div className="flex flex-col transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-6">
          <div className="h-6 flex items-center justify-center gap-2">
            {Icon && (
              <Icon className="w-5 h-5 shrink-0 transition-opacity duration-300" />
            )}
            <span className="whitespace-nowrap">{children}</span>
          </div>

          <div className="h-6 flex items-center justify-center gap-2">
            {Icon && (
              <Icon className="w-5 h-5 shrink-0 transition-opacity duration-300" />
            )}
            <span className="whitespace-nowrap">{children}</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default PrimaryButton;
