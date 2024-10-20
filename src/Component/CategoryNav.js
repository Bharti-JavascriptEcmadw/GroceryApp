import React, { useEffect, useState } from 'react';
import { FaHome, FaTags, FaInfoCircle, FaHeadset } from 'react-icons/fa';

const CategoryNav = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = ['Home', 'Deals', 'About Us', 'Live Chat'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLink((prev) => (prev + 1) % links.length);
    }, 1000); // Change every 1 second
    return () => clearInterval(interval);
  }, []);

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
          {links.map((link, index) => (
            <a 
              key={index} 
              href={`/${link.toLowerCase()}`} 
              className={`flex items-center space-x-2 mb-2 md:mb-0 mx-3 p-2 rounded-md transition duration-300 ${
                activeLink === index 
                  ? 'bg-red-500' // Active link background color
                  : 'hover:bg-green-200' // Hover background color
              }`}
            >
              {index === 0 && <FaHome size={20} />}
              {index === 1 && <FaTags size={20} />}
              {index === 2 && <FaInfoCircle size={20} />}
              {index === 3 && <FaHeadset size={20} />}
              <span>{link}</span>
            </a>
          ))}
        </div>

        {/* Support Center */}
        <div className="flex items-center justify-center md:justify-end text-black bg-green-500 p-4 hover:bg-pink-400 mb-4 md:mb-0">
          <span className="font-bold">1234-567-8910</span>
          <span className="font-semibold ml-1">Support Center:</span>
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
