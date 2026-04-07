import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import NavCtaButton from "../Button/NavCtaButton";

const navLink = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];
const NavBar = () => {
      const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
     <section className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div
        className={`mx-auto flex items-center justify-between px-6 py-4 transition-all duration-500
          ${
            scrolled
              ? "max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl mt-3"
              : "max-w-7xl bg-transparent"
          }`}
      >
        {/* logo */}
        <div>
          <Logo />
        </div>

        {/* nav links */}
        <nav>
          <ul className="flex items-center gap-6 font-inter text-sm sm:text-base md:text-base lg:text-lg font-medium text-slate-800 hover:text-slate-600 transition duration-500">
            {navLink.map((link, i) => (
              <li key={`k${i}`}>
                <NavLink to={link.path}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button */}
        <div>
          <NavCtaButton />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
