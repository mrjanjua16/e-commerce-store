import { useState, useEffect } from 'react';
import { Spinner } from 'flowbite-react';

const NewCollections = () => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch('/api/banner/get');
        if (!response.ok) {
          throw new Error('Failed to fetch collection');
        }
        const data = await response.json();
        if (data.success && data.data.length > 1) {
          setCollection(data.data[1]);
          setLoading(false);
        } else {
          throw new Error('No collection found');
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCollection();
  }, []);

  if (loading) 
    return (
      <div className='flex justify-center items-center h-screen'>
        <Spinner
          color='gray'
          size='xl'
        />
      </div>
    );

  if (error)
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>{error.message}</p>
      </div>
    );

  return (
    <section className="relative w-full h-screen bg-gray-100">
      <div className="absolute inset-0">
        <img 
          src={collection?.imageUrl}
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
