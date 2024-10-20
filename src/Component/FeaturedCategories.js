import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Organic Potato',
      price: '$3.99',
      image: '/assets/pota.jpg',
      description: 'Vegetable.',
    },
    {
      id: 2,
      name: 'Radish',
      price: '$2.49',
      image: '/assets/rad.jpg',
      description: 'Fresh Radish.',
    },
    {
      id: 3,
      name: 'Red Tomato',
      price: '$1.89',
      image: '/assets/toma.avif',
      description: 'Fresh organic Tomato.',
    },
    {
      id: 4,
      name: 'Broccoli',
      price: '$4.99',
      description: 'Vegetable',
      image: '/assets/broac.jpg',
    },
    {
      id: 5,
      name: 'Coffee',
      price: '$1.89',
      image: '/assets/coffee.webp',
      description: 'Coffee.',
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <div className="py-6 px-4 md:px-6 relative">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">Featured Products</h2>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
          <a href="#" className="text-pink-600 hover:underline">All Vegetables</a>
          <a href="#" className="text-pink-600 hover:underline">Fruits</a>
          <a href="#" className="text-pink-600 hover:underline">Coffee & Tea</a>
          <a href="#" className="text-pink-600 hover:underline">Meat</a>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-3 rounded-full hover:bg-gray-400 focus:outline-none shadow-md"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Products List Container */}
      <div className="mx-auto overflow-hidden " style={{ maxWidth: '100%' }}>
        <div
          className="scroll-container flex space-x-4 overflow-x-auto scrollbar-hide items-center justify-center" // Added justify-center here
          ref={scrollRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-40 md:w-52 bg-pink-200 border border-gray-200 p-3 shadow-lg rounded-md"
            >
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-base font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-green-600 text-black px-3 py-1 rounded-md hover:bg-blue-700 flex items-center">
                  <FaShoppingCart className="mr-1" />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-3 rounded-full hover:bg-gray-400 focus:outline-none shadow-md"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default FeaturedProducts;
