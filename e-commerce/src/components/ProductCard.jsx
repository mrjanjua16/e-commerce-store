import React from "react";

const ProductCard = ({ images, name, price }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={images[0]}
        alt={name}
        className="h-90 w-full object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
      <p className="mt-2 text-gray-500">${price}</p>
    </div>
  );
};

export default ProductCard;
