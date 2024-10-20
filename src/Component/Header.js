import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Vegetable Logo"
            className="w-10 h-10 mr-3"
          />
          <div>
            <a href="/" className="text-2xl md:text-3xl font-bold">Marketplace</a>
            <p className="text-sm font-bold text-center text-white">Grocery</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-auto flex justify-center md:flex-1">
          <div className="flex w-full max-w-md">
            <select className="p-2 bg-gray-200 text-gray-900 outline-none">
              <option value="all">All Categories</option>
              <option value="potato">Potato</option>
              <option value="ladyfinger">Ladyfinger</option>
              <option value="tomato">Tomato</option>
              <option value="carrot">Carrot</option>
            </select>
            <input
              type="text"
              placeholder="|  Search for items..."
              className="p-2 flex-grow w-5 outline-none border-t border-b border-l bg-white"
            />
            <button className="p-2 bg-yellow-800 text-white hover:bg-blue-500 mr-7">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Wishlist */}
          <a href="/wishlist" className="relative flex items-center">
            <FaHeart size={24} className="text-black" />
            <span className="absolute -top-2 left-4 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              4
            </span>
            <span className="ml-2 hidden md:inline-block">Wishlist</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="relative flex items-center">
            <FaShoppingCart size={24} className="text-black" />
            <span className="absolute -top-2 left-4 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              1
            </span>
            <span className="ml-2 hidden md:inline-block">My Cart</span>
            <span className="ml-2 text-xs text-gray-600 hidden md:inline-block">$1</span>
          </a>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <img
              src="/assets/profile.png"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium hidden md:inline-block">Guest</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
