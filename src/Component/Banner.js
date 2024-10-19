// Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div 
      className="bg-blue-600 text-white py-10 px-6 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/assets/banner1.webp")' 
      }}
    >
      <div className="text-left max-w-lg  bg-opacity-70 text-black p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Don’t miss our daily amazing deals.</h2>
        <p className="text-lg md:text-xl mb-6 text-left">Save up to 60% off on your first order</p>
        <div className="flex flex-col md:flex-row mb-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-4 py-2  text-black focus:outline-none w-full mb-2 md:mb-0 md:mr-0"
          />
          <button className="bg-blue-900 px-6 py-2 mr-4 text-white font-semibold hover:bg-yellow-600">
            Subscribe
          </button>
        </div>
             </div>
    </div>
  );
};

export default Banner;
