import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Backpack', price: '285.00', image: 'https://source.unsplash.com/600x400/?backpack' },
  { id: 2, name: 'Digital Watch', price: '285.00', image: 'https://source.unsplash.com/600x400/?watch' },
  { id: 3, name: 'Brown Bag', price: '285.00', image: 'https://source.unsplash.com/600x400/?bag' },
  { id: 4, name: 'Sunglasses', price: '285.00', image: 'https://source.unsplash.com/600x400/?sunglasses' },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Selected just for you</h2>
        <button className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100">
          SHOW MORE
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
