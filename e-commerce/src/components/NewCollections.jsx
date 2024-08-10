import React from 'react';

const NewCollections = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0">
        <img 
          src="https://via.placeholder.com/1920x1080" // Replace with actual image URL
          alt="New Collections" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-end h-full container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3">
          <h2 className="text-3xl font-semibold mb-4">NEW COLLECTIONS</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
