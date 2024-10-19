import React from 'react';

const Banner = () => {
  return (
    <div 
      className="bg-blue-600 text-white py-10 px-4 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("/assets/banner22.jpg")' 
      }}
    >
      <div className="bg-blue-600 bg-opacity-50 p-4  max-w-lg mx-auto text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Don’t miss our daily amazing deals.</h2>
        <p className="text-md md:text-xl mb-6">Save up to 60% off on your first order</p>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="px-4 py-2 text-black w-full mb-2 md:mb-0 md:mr-2 rounded-md focus:outline-none"
          />
          <button className="bg-blue-900 px-6 py-2 text-white font-semibold rounded-md w-full md:w-auto hover:bg-yellow-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
