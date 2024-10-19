import React from 'react';

const LargeBanner = () => {
  return (
    <div
      className="relative w-full h-60 md:h-96 lg:h-[450px] bg-cover bg-center flex flex-col justify-center items-start pl-8 text-left" 
       style={{ backgroundImage: "url('assets/Banner2.jpg')" }} 
    >
      
      <div className="absolute "></div>

      <h2 className="relative text-dark-blue text-3xl md:text-4xl font-bold mb-2 z-10">
        Shop Faster with Marketplace
      </h2>
      <p className="relative text-dark-blue text-lg md:text-xl mb-4 z-10">
      Available on both IOS & Android
      </p>

    
      <div className="flex space-x-4 mb-4 z-10">
        <a href="/app-store" className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700">
          App Store
        </a>
        <a href="/google-play" className="bg-black text-white px-4 py-2 rounded hover:bg-green-500">
          Google Play
        </a>
      </div>
    </div>
  );
};

export default LargeBanner;
