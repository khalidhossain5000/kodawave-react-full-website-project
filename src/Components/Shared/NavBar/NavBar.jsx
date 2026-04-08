import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router";
import NavCtaButton from "../Button/NavCtaButton";
import MobileMenu from "./MobileMenu";
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
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
  
];
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="fixed top-0 left-0 w-full z-[9999999999999999999999999999] transition-all duration-500">
      <div
        className={`mx-auto flex items-center justify-between px-6 transition-all duration-500
          ${
            scrolled
              ? "max-w-[300px] xsm:max-w-100 sm:max-w-4xl xl:max-w-5xl bg-white/80 backdrop-blur-md  shadow-lg rounded-full mt-3 relative z-9999999 pb-2 md:pb-3  lg:pb-4 pt-2 lg:pt-6 "
              : "max-w-7xl bg-transparent pt-8 pb-8 "
          }`}
      >
        {/* logo */}
        <div>
          <Link to="/">
          <Logo />
          </Link>
        </div>

        {/* nav links */}
        <nav>
          <ul className="hidden xl:flex items-center gap-6 font-inter text-sm sm:text-base md:text-base lg:text-lg font-medium text-slate-800 hover:text-slate-600 transition duration-500">
            {navLink.map((link, i) => (
              <li key={`k${i}`}>
                <NavLink
                  to={link.path}
                  className="relative group transition duration-500 hover:text-slate-600"
                >
                  {link.label}
                  <span className="absolute left-0  -bottom-1 w-full h-0.5 bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button and mobile menu toggle */}
        <div className="flex items-center gap-6">
          {/* contact button */}
          <div className="hidden md:block">
            <Link to="/contact">
            <NavCtaButton />
            </Link>
          </div>

          {/* mobile toggle menu */}

          <div className="xl:hidden">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <IoMdClose size={30} />{" "}
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <HiBars2 size={30} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu nav items */}
      <MobileMenu isOpen={isOpen} navLink={navLink} setIsOpen={setIsOpen}/>
    </section>
  );
};

export default NavBar;
