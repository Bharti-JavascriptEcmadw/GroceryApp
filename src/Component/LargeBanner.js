import React from 'react';

const LargeBanner = () => {
  return (
    <div
      className="relative w-full h-60 md:h-96 lg:h-[450px] bg-cover bg-center flex flex-col justify-center items-center text-center" 
      style={{ backgroundImage: "url('assets/Banner2.jpg')" }} 
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Darker overlay for better text visibility */}

      <h2 className="relative text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-2 z-10">
        Shop Faster with Marketplace
      </h2>
      <p className="relative text-black text-lg md:text-xl mb-4 z-10 max-w-md">
        Available on both iOS & Android
      </p>

      <div className="flex flex-col items-center justify-center z-10"> 
                <a 
          href="/app-store" 
          className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-200 w-full sm:w-auto mb-2 text-center"
        >
          App Store
        </a>
        <a 
          href="/google-play" 
          className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition duration-200 w-full sm:w-auto"
        >
          Google Play
        </a>
      </div>
    </div>
  );
};

export default LargeBanner;
