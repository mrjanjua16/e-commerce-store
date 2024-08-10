import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import search from '../assets/search.png';
import downArrow from '../assets/down arrow.png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className=" top-0 left-0 w-full flex justify-between items-center py-4 px-4 md:px-10 bg-transparent z-30">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navbar Items */}
        <ul className={`flex-col md:flex-row md:flex md:space-x-10 text-white ml-auto ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li><Link to="/" className="hover:text-gray-300 mr-4">Home</Link></li>
          <li><Link to="/pages" className="hover:text-gray-300 mr-4">Pages</Link></li>
          <li><Link to="/shop" className="hover:text-gray-300 mr-4">Shop</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300 mr-4">Contact Us</Link></li>
          {/* Dropdown */}
          <div className="relative md:ml-4">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white focus:outline-none flex items-center"
            >
              ENG <img src={downArrow} alt="down-arrow" className="ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white text-black rounded-md shadow-lg z-30">
                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">ENG</Link>
                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">FRA</Link>
                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">ESP</Link>
              </div>
            )}
          </div>
        </ul>
        
        {/* Cart and Search Icons */}
        <div className="flex items-center space-x-8 md:space-x-10 mt-4 md:mt-0">
          <Link to="/" className="text-white">
            <div
              className="w-5 h-5 md:w-6 md:h-6 bg-center bg-no-repeat bg-cover" 
              style={{ backgroundImage: `url(${cart})` }}
            ></div>
          </Link>
          <Link to="/" className="text-white">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${search})` }}></div>
          </Link>
        </div>
      </nav>
    );
};

export default Navbar;
