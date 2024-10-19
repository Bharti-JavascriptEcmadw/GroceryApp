import React from 'react';
import { FaHome, FaTags, FaInfoCircle, FaHeadset } from 'react-icons/fa'; // Import icons

const CategoryNav = () => {
  return (
    <nav className="bg-white py-4 shadow-sm ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-2 border=black">
      
        <div className="flex items-center mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Browse all categories..."
            className="p-2 border border-gray-300 bg-blue-900 text-white outline-none"
            style={{ width: '200px' }} 
          />
        </div>

        
        <div className="flex flex-wrap justify-center md:justify-between space-x-0 md:space-x-6 items-center mb-4 md:mb-0">
          {/* Home Link */}
          <a href="/" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0">
            <FaHome size={20} />
            <span>Home</span>
          </a>

          {/* Deal Link */}
          <a href="/deals" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0">
            <FaTags size={20} />
            <span>Deals</span>
          </a>

          {/* About Us Link */}
          <a href="/about" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0">
            <FaInfoCircle size={20} />
            <span>About Us</span>
          </a>

          {/* Live Chat Link */}
          <a href="/chat" className="flex items-center space-x-2 hover:text-green-500 mb-2 md:mb-0">
            <FaHeadset size={20} />
            <span>Live Chat</span>
          </a>
        </div>

        {/* Support Center */}
        <div className="flex items-center space-x-2 text-gray-700 mb-4 md:mb-0">
          <span className="font-bold">1234-567-8910</span>
          <span className="font-semibold">Support Center:</span>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
