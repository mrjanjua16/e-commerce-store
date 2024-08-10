import React from 'react';

const FashionCategoryCard = ({ image, title }) => {
  return (
    <div className="relative flex items-center justify-between bg-gray-50 p-6 rounded-lg shadow-lg max-w-md md:max-w-2xl lg:max-w-none">
      <img
        src={image}
        alt={title}
        className="w-1/2 h-auto rounded-lg object-cover"
      />
      <div className="ml-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {title}
        </h2>
        <button className="flex items-center mt-4 text-blue-600 font-medium hover:underline">
          <span>VIEW ALL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FashionCategoryCard;
