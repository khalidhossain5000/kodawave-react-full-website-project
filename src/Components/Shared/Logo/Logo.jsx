import React from 'react';
import { GiGrowth } from "react-icons/gi";
import PixelGrowIcon from './PixelGrowIcon';

const Logo = ({className}) => {
    return (
        <h1 className={`text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 flex items-center gap-2 font-grotesk ${className}`}> <span><PixelGrowIcon/></span>PixelGrow</h1>
    );
};

export default Logo;