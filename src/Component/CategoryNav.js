import React, { useEffect, useState } from 'react';
import { FaHome, FaTags, FaInfoCircle, FaHeadset } from 'react-icons/fa';

const CategoryNav = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    { name: 'Home', icon: <FaHome size={20} /> },
    { name: 'Deals', icon: <FaTags size={20} /> },
    { name: 'About Us', icon: <FaInfoCircle size={20} /> },
    { name: 'Live Chat', icon: <FaHeadset size={20} /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLink((prev) => (prev + 1) % links.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [links.length]);

  return (
    <nav className="bg-white py-4 shadow-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Browse all categories..."
          className="p-2 mr-8 border border-gray-300 bg-blue-900 text-white outline-none rounded-md w-full md:w-64 mb-4 md:mb-0"
        />

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-between items-center mb-4 md:mb-0">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={`/${link.name.toLowerCase}`} 
              className={`flex items-center space-x-2 mb-2 md:mb-0 mx-3 p-2 rounded-md transition duration-300 ${
                activeLink === index ? 'bg-green-300' : 'hover:bg-green-200'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
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
