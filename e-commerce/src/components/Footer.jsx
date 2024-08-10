import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">About</h5>
            <p className="text-sm mb-4">
              We diminution preference thoroughly if. Joy deal pain view much her time. Led young gay would now state. Pronounce we attention admitting.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Shopping Online</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Order Status</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Shipping & Delivery</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Returns</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Payment Options</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Information</h5>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Gift Card</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Find a Store</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Newsletter</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Become a Member</a></li>
              <li><a href="#" className="text-sm text-gray-700 hover:text-gray-900">Site Feedback</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-4">Contact</h5>
            <p className="text-sm text-gray-700 mb-2">store@mail.com</p>
            <p className="text-sm text-gray-700">Tel: +91 1234 5678 99</p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          © Copyrights. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
