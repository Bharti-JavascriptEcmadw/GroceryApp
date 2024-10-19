import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa'; // Import arrow and cart icons

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
      id: 4,
      name: 'Coffee',
      price: '$1.89',
      image: '/assets/coffee.webp',
      description: 'Coffee.',
    },
  ];

  const scrollRef = useRef(null); // Reference for the product list

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Scroll amount can be adjusted
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Scroll amount can be adjusted
    }
  };

  return (
    <div className="py-10 px-4 md:px-6 relative">
      <div className="flex justify-between items-center mb-6 flex-wrap">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        {/* Responsive category links */}
        <div className="flex flex-wrap space-x-2 md:space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-black-600 hover:underline">All Vegetables</a>
          <a href="#" className="text-black-600 hover:underline">Fruits</a>
          <a href="#" className="text-black-600 hover:underline">Coffee & Tea</a>
          <a href="#" className="text-black-600 hover:underline">Meat</a>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-3 hover:bg-gray-400 focus:outline-none "
        style={{ transition: 'background-color 0.2s' }}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Products List Container */}
      <div className="mx-auto overflow-hidden" style={{ maxWidth: '90%' }}>
        <div
          className="scroll-container flex space-x-6 overflow-x-auto scrollbar-hide"
          ref={scrollRef}
          style={{
            scrollbarWidth: 'none', // For Firefox
            msOverflowStyle: 'none', // For Internet Explorer and Edge
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="bg-white border-2 border-gray-50  p-4 flex-shrink-0 w-50 md:w-52">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold">{product.price}</span>
                <button className="bg-pink-100 text-black px-4 py-1 hover:bg-blue-700 flex items-center">
                  <FaShoppingCart className="mr-2" /> {/* Cart icon */}
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
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-3 rounded-full hover:bg-gray-400 focus:outline-none shadow-lg"
        style={{ transition: 'background-color 0.2s' }}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default FeaturedProducts;
