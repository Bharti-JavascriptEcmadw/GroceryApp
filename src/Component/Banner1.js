import React from 'react';

const Banner1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 px-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Left Banner Content */} 
      <div
        className="relative w-full max-w-xl h-60 md:h-80 lg:h-90 bg-cover bg-center flex flex-col justify-center items-start p-8"
        style={{ backgroundImage: "url('assets/left.jpg')" }}
      >
        <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-green-600 mb-2">
          Free Delivery
        </button>
        <h3 className="text-xl md:text-2xl font-bold text-black">Free Delivery Over $50</h3>
        <p className="text-white mb-4 md:mb-6">Shop $50 products and get free delivery anywhere</p>
        <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-green-600">
          Shop Now
        </button>
      </div>

      {/* Right Banner Content */}
      <div
        className="relative w-full max-w-xl h-60 md:h-80 lg:h-90 bg-cover bg-center flex flex-col justify-center items-start p-8"
        style={{ backgroundImage: "url('assets/right.jpg')" }}
      >
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-green-600 mb-2">
          60%
        </button>
        <h3 className="text-xl md:text-2xl font-bold text-white">Organic Food</h3>
        <p className="text-white mb-4 md:mb-6">Save up to 60% on your first order</p>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner1;
