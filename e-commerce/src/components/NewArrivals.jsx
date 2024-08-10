import React from 'react';

const products = [
  {
    id: 1,
    name: 'Louis Vuitton Bag',
    price: '$285.00',
    imageUrl: 'https://via.placeholder.com/300x400', // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Louis Vuitton Bag',
    price: '$285.00',
    imageUrl: 'https://via.placeholder.com/300x400', // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Louis Vuitton Bag',
    price: '$285.00',
    imageUrl: 'https://via.placeholder.com/300x400', // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Louis Vuitton Bag',
    price: '$285.00',
    imageUrl: 'https://via.placeholder.com/300x400', // Replace with the actual image URL
  },
];

const NewArrivals = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-300">
          SHOW MORE
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
