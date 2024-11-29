import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cart.png";
import search from "../assets/search.png";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav
      className={`absolute w-full z-50 transition-all duration-300 ${navbarSolid ? "bg-transparent" : "bg-transparent"} text-white`}
    >
      <div className="container mx-auto flex justify-center items-center px-4 py-4">
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="md:hidden text-white ml-auto"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
          <div
            className={`md:flex flex-col md:flex-row md:items-center absolute md:static top-full left-0 w-full md:w-auto ${navbarOpen ? "bg-white bg-opacity-20 backdrop-blur-md" : "hidden"} md:bg-transparent`}
          >
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6 text-center mt-4 md:mt-0 justify-center">
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  Pages
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  Blog
                </Link>
              </li>
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              <li className="relative p-4 md:p-0 md:mr-6">
                {" "}
                {/* Add margin-right to create space */}
                <button
                  onClick={toggleLanguageDropdown}
                  className="hover:text-gray-300"
                >
                  ENG
                </button>
                {languageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg z-30">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      ENG
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      FRA
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      ESP
                    </Link>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      DEU
                    </Link>
                  </div>
                )}
              </li>
            </ul>
            <ul className="flex items-center space-x-9 mt-4 md:mt-0 justify-center">
              <li className="p-4 md:p-0">
                <Link to="/" className="hover:text-gray-300">
                  <div
                    className="w-5 h-5 md:w-6 md:h-6 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${cart})` }}
                  ></div>
                </Link>
              </li>
              <li
                className="p-4 md:p-0"
                style={{ marginLeft: "40px", marginRight: "40px" }}
              >
                <Link to="/" className="hover:text-gray-300">
                  <div
                    className="w-5 h-5 md:w-6 md:h-6 bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${search})` }}
                  ></div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
