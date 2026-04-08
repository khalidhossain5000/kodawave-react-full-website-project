import React from "react";
import { Link, NavLink } from "react-router";
import NavCtaButton from "../Button/NavCtaButton";

const MobileMenu = ({ navLink, isOpen ,setIsOpen}) => {
  return (
    <div
      className={`pb-12 absolute top-full left-0 w-full bg-linear-to-b bg-slate-100  to-slate-300 border-none shadow-2xl transition-all duration-300 origin-top  ${
        isOpen
          ? "opacity-100 scale-y-100 visible"
          : "opacity-0 scale-y-0 invisible"
      }`}
    >
      <ul className="flex flex-col p-6 gap-4 font-semibold text-gray-700 border-t border-gray-100">
        {navLink.map((item, i) => (
          <NavLink to={item.path} key={`o${i}`} onClick={()=>setIsOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </ul>
      <div className="md:hidden px-6">
        <Link to="/contact" onClick={()=>setIsOpen(false)}>
          <NavCtaButton />
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
