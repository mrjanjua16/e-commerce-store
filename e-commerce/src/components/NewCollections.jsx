import React from 'react';
import newCollectionImage from '../assets/New-Collection--img.png';

const NewCollections = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0">
        <img 
          src={newCollectionImage}
          alt="New Collections" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-end justify-end h-full container mx-auto px-4">
        <div className="flex-col bg-white p-4 rounded-lg shadow-lg w-76 mb-0">
          <h2 className="text-2xl font-semibold mb-2">NEW COLLECTIONS</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
