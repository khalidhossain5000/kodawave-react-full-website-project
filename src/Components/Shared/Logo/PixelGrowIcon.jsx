import React from 'react';

const PixelGrowIcon = ({ size = 40, color = "#6366f1", className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PixelGrow Logo"
    >
      {/* Bottom Small Pixel */}
      <rect x="3" y="17" width="4" height="4" rx="1" fill={color} fillOpacity="0.4" />
      
      {/* Middle Medium Pixel */}
      <rect x="9" y="11" width="6" height="10" rx="1.5" fill={color} fillOpacity="0.7" />
      
      {/* Top Large Pixel / Arrow Base */}
      <rect x="16" y="4" width="5" height="17" rx="2" fill={color} />
      
      {/* Accent "Growth" Sparkle */}
      <path
        d="M18.5 2L19.2 3.8L21 4.5L19.2 5.2L18.5 7L17.8 5.2L16 4.5L17.8 3.8L18.5 2Z"
        fill="#10B981" 
      />
    </svg>
  );
};

export default PixelGrowIcon;