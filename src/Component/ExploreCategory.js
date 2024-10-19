// Categories.js
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../App.css'; 

const ExploreCategory = () => {
  const categories = [ 
    { name: 'Fruit & Vegetable', image: '/assets/fruit.webp' }, 
    { name: 'Dairy, Bread & Eggs', image: '/assets/cold.jpg' },
    { name: 'Cold Drinks & Juices', image: '/assets/dairy.jpg' },
    { name: 'Tea, Coffee & More', image: '/assets/detol.jpg' },
    { name: 'Biscuits', image: '/assets/buis.jpg' },
    { name: 'Health & Baby Care', image: '/assets/detol.jpg' },
  ];

  const scrollRef = useRef(null);

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
    <div className="py-10 px-4 md:px-6 relative mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">Explore by Categories</h2>
           <div className="flex flex-wrap space-x-2 md:space-x-6">
          <a href="#" className="text-pink-600 hover:underline">All Vegetables</a>
          <a href="#" className="text-pink-600 hover:underline">Fruits</a>
          <a href="#" className="text-pink-600 hover:underline">Coffee & Tea</a>
          <a href="#" className="text-pink-600 hover:underline">Meat</a>
        </div>
      </div>
      <div className="flex items-center relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none mx-2 ml-4" // Added ml-4 for margin-left
        >
          <FaArrowLeft size={24} />
        </button>
      
        <div
          className="scroll-container scrollbar-hide flex space-x-4 md:space-x-10 overflow-x-auto justify-center" 
          ref={scrollRef}
          style={{ width: '100%' }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center bg-gray-200 p-4 md:p-6 shadow-md text-center hover:bg-gray-300 cursor-pointer w-32 md:w-40"
            >
              <img
                src={category.image} 
                alt={category.name}
                className="w-16 h-16 mb-2 object-cover" 
              />
              <div className="text-sm">{category.name}</div>
            </div>
          ))}
        </div>

        
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400 focus:outline-none mx-2"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ExploreCategory;
