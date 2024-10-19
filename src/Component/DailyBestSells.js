import React from 'react';

const DailyBestSells = () => {
  const products = [
    {
      category: 'Coffee & teas',
      name: 'Coffee 1kg',
      price: 20,
      originalPrice: 25,
      sold: 20,
      total: 50,
      image: 'assets/coffee1.jpg',
    },
    {
      category: 'Coffee & teas',
      name: 'Coffee 1kg',
      price: 20,
      originalPrice: 25,
      sold: 20,
      total: 50,
      image: 'assets/coffee1.jpg',
    },
    {
      category: 'Coffee & teas',
      name: 'Coffee 1kg',
      price: 20,
      originalPrice: 25,
      sold: 20,
      total: 50,
      image: 'assets/coffee1.jpg',
    },
    {
      category: 'Coffee & teas',
      name: 'Coffee 1kg',
      price: 20,
      originalPrice: 25,
      sold: 20,
      total: 50,
      image: 'assets/coffee1.jpg',
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white">
      <div className="bg-white p-4 w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Daily Best Sells</h2>
            <div className="flex space-x-2">
              <button className="text-gray-600 hover:text-gray-800">Featured</button>
              <button className="text-gray-600 hover:text-gray-800">Popular</button>
              <button className="text-gray-600 hover:text-gray-800">New</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-300 transition flex items-center justify-center">
              <span className="text-xl font-bold">&#8592;</span>
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition flex items-center justify-center">
              <span className="text-xl font-bold">&#8594;</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 p-4 flex flex-col">
              <div className="flex items-center justify-center h-32 w-full mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full w-auto"
                />
              </div>
              <p className="text-sm text-gray-500 text-left">{product.category}</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-left">{product.name}</h3>
              <div className="flex items-center my-2">
                <span className="text-blue-500 font-bold text-xl">${product.price}</span>
                <span className="text-blue-500 line-through ml-2">${product.originalPrice}</span>
              </div>

              <div className="h-1 bg-blue-900 mb-2"></div>
              <p className="text-gray-500 text-sm text-left">Sold: {product.sold}/{product.total}</p>
              <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded flex items-center justify-center">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l3 9h11l3-9H6.42M13 17h2a2 2 0 110 4h-2a2 2 0 110-4zm-6 0h2a2 2 0 110 4H7a2 2 0 110-4z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyBestSells;
