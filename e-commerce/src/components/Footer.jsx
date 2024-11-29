import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center md:text-left">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">About</h5>
            <p className="text-sm mb-4">
              We diminution preference thoroughly if. Joy deal pain view much
              her time. Led young gay would now state. Pronounce we attention
              admitting.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <FaFacebookF />
              </Link>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <FaTwitter />
              </Link>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <FaInstagram />
              </Link>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                <FaYoutube />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Shopping Online</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Order Status
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h5 className="font-bold mb-4">Information</h5>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Gift Card
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Find a Store
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Become a Member
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-700 hover:text-gray-900"
                >
                  Site Feedback
                </Link>
              </li>
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
