import { useState, useEffect } from 'react';

import { Spinner } from 'flowbite-react';

const NewArrivals = () => {
  const [showMore, setShowMore] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const fetchNewArrivals = async () => {
        setLoading(true);
        try {
          const newArrivals = await fetch('/api/product/get/new-arrival');
          if (!newArrivals.ok) {
            throw new Error('Failed to fetch new arrivals');
          }
          const data = await newArrivals.json();
          setNewArrivals(data);
          setLoading(false);
        } catch (error) {
          setError('Failed to fetch new arrivals');
          setLoading(false);
        }
      }

      fetchNewArrivals();
    },
    []
  );

  if (loading) 
    return (
      <div className='flex justify-center items-center h-screen'>
        <Spinner
          color='gray'
          size='xl'
        />
      </div>
    );

  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.slice(0, showMore ? newArrivals.length : 4).map((product) => (
            <div key={product._id} className="group">
              <div className="overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-8 px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'SHOW LESS' : 'SHOW MORE'}
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
