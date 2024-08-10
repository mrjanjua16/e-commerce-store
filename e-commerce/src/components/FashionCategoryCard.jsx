import React from 'react';

const FashionCategoryCard = ({ image, title, textPosition }) => {
  return (
    <div className="relative flex items-center justify-center bg-gray-50 p-4 rounded-lg shadow-lg max-w-sm md:max-w-md lg:max-w-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-lg object-cover"
      />
      <div
        className={`absolute ${textPosition === 'left' ? 'top-1/2 left-4 transform -translate-y-1/2' : 'top-1/2 right-4 transform -translate-y-1/2'} bg-white bg-opacity-0 p-4 rounded-lg shadow-lg w-40 text-center`} 
      >
        <h2 className="text-sm md:text-base font-semibold text-gray-800 whitespace-pre-line"> 
          {title}
        </h2>
        <button className="flex items-center mt-2 text-blue-600 font-medium hover:underline mx-auto">
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
