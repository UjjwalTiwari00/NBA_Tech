import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import nba_log_1 from "../images/nba_log_1.png";
import {Link} from "react-scroll"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    // { name: "Home" },
    { name: "About" },
    { name: "Services", dropdown: true },
    // { name: "Gallery" },
    // { name: "Career"},
  ];

  const serviceItems = [
    { name: "UI/UX Development", href: "#ui-ux-development" },
    { name: "Software Development", href: "#software-development" },
    { name: "Web Development", href: "#web-development" },
    { name: "Mobile Application", href: "#mobile-application" },
    { name: "Cloud Solutions", href: "#cloud-solutions" },
    { name: "ERP System", href: "#erp-system" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-700 shadow-md" : " text-white bg-gray-900"
      }`}
    >
      <header className="flex flex-wrap justify-between items-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full ">
          <img src={nba_log_1} alt="logo" className="h-32 w-44"/>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-4 space-y-2 md:space-y-0">
          <NavLink  to="/"  className='cursor-pointer block py-2 px-3 rounded-md text-base font-medium hover:text-purple-600'>
            Home
            </NavLink>
            {navItems.map((item) => (
              <Link  to={item.name} smooth={true} duration={500} key={item.name} className="relative group cursor-pointer" >
                <a
                  href={item.href}
                  className={`block py-2 px-3 rounded-md text-base font-medium hover:text-purple-600 transition-colors ${
                    isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-gray-700"
                  }`}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-md py-2 rounded-md w-52 z-10">
                    {serviceItems.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            ))}
            <NavLink  to="/gallery"  className='cursor-pointer block py-2 px-3 rounded-md text-base font-medium hover:text-purple-600'>
            Gallery
            </NavLink>
            <NavLink  to="/career"  className='cursor-pointer block  py-2 px-3 rounded-md text-base font-medium hover:text-purple-600'>
              
            Career
             
            </NavLink>
            <Link  to="contact" smooth={true} duration={500} className='cursor-pointer'>
              <a
               
                className={`block py-2 px-4 rounded-md text-base font-medium text-white transition-colors ${
                  isScrolled
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                Contact
              </a>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;