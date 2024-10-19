import React from 'react';
import { FaHome, FaTags, FaInfoCircle, FaHeadset } from 'react-icons/fa';

const CategoryNav = () => {
  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Search Bar */}
        <div className="flex items-center mb-4 md:mb-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Browse all categories..."
            className="p-2 mr-8 border border-gray-300 bg-blue-900 text-white outline-none rounded-md w-full md:w-64"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-4 md:mb-0">
          {/* Home Link */}
          <a href="/" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0 mx-1">
            <FaHome size={20} />
            <span>Home</span>
          </a>

          {/* Deals Link */}
          <a href="/deals" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0 mx-3">
            <FaTags size={20} />
            <span>Deals</span>
          </a>

          {/* About Us Link */}
          <a href="/about" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0 mx-3">
            <FaInfoCircle size={20} />
            <span>About Us</span>
          </a>

          {/* Live Chat Link */}
          <a href="/chat" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0 mx-1">
            <FaHeadset size={20} />
            <span>Live Chat</span>
          </a>
        </div>

        {/* Support Center */}
        <div className="flex items-center justify-center md:justify-end text-gray-700 mb-4 md:mb-0">
          <span className="font-bold">1234-567-8910</span>
          <span className="font-semibold ml-1">Support Center:</span>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
