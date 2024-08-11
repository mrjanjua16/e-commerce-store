import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

import { Spinner } from 'flowbite-react';

const ProductGrid = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(
    () => {
      const fetchProducts = async () => {
        try {
          const products = await fetch('/api/product/get');
          if (!products.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await products.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
      fetchProducts();
    },
    []
  )

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
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Selected just for you</h2>
        <button
         className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-100"
         onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'SHOW LESS' : 'SHOW MORE'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, showMore ? products.length : 4).map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
