// import React, { useState, useEffect } from "react";
// import logo_2 from "../images/logo_2.png";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white text-gray-900 shadow-md" : "bg-gray-900 text-white"}`}>
//       <header className="flex justify-between items-center max-w-[90%] mx-auto">
//         <div className="h-28 w-42">
//           <img src={logo_2} alt="logo" className="w-full h-full object-contain" />
//         </div>

//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
//           </button>
//         </div>

//         <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"} md:block`}>
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//             <li className="p-3 m-2">
//               <a href="#home" className={`hover:text-purple-600 transition-colors text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>Home</a>
//             </li>
//             <li className="p-3 m-2">
//               <a href="#about" className={`hover:text-purple-600 transition-colors text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>About</a>
//             </li>
//             <li className="dropdown p-3 m-2 relative group">
//               <a href="#services" className={`hover:text-purple-600 transition-colors text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>Services</a>
//               <ul className="dropdown-menu absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 rounded-md w-52 z-10">
//                 <li><a href="#ui-ux-development" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">UI/UX Development</a></li>
//                 <li><a href="#software-development" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">Software Development</a></li>
//                 <li><a href="#web-development" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">Web Development</a></li>
//                 <li><a href="#mobile-application" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">Mobile Application</a></li>
//                 <li><a href="#cloud-solutions" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">Cloud Solutions</a></li>
//                 <li><a href="#erp-system" className="block px-4 py-2 hover:bg-purple-100 text-gray-900">ERP System</a></li>
//               </ul>
//             </li>
//             <li className="p-3 m-2">
//               <a href="#gallery" className={`hover:text-purple-600 transition-colors text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>Gallery</a>
//             </li>
//             <li className="p-3 m-2">
//               <a href="#career" className={`hover:text-purple-600 transition-colors text-xl ${isScrolled ? "text-gray-900" : "text-white"}`}>Career</a>
//             </li>
//             <li className={`p-2 rounded-lg transition-colors ${isScrolled ? "bg-green-500 hover:bg-green-600" : "bg-green-400 hover:bg-green-500"}`}>
//               <a href="#contact" className="text-white text-xl">Contact</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo_2 from "../images/logo_2.png";

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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services", dropdown: true },
    { name: "Gallery", href: "#gallery" },
    { name: "Career", href: "#career" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-gray-900 shadow-md" : "bg-gray-900 text-white"
      }`}
    >
      <header className="flex flex-wrap justify-between items-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-full">
          <img src={logo_2} alt="logo" className="h-32 object-contain" />
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
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
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
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`block py-2 px-4 rounded-md text-base font-medium text-white transition-colors ${
                  isScrolled
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;