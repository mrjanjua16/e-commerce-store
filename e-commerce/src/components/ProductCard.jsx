import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="h-48 w-full object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-2 text-gray-500">${price}</p>
    </div>
  );
};

export default ProductCard;
