import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

import { Spinner } from 'flowbite-react';

export default function HeroSection() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/banner/get');
        if (!response.ok) {
          throw new Error('Failed to fetch banner');
        }
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          setBanner(data.data[0]);
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBanner();
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


  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banner ? banner.imageUrl : backgroundImage})` }}
    >
      <Navbar />
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start text-white px-4 md:px-10 pt-20 md:pt-24">
        <h3 className="uppercase text-sm mb-3">Sale</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Stocktake Sale <br /> Upto 75% Off
        </h1>
        <Link to="/" className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-medium flex items-center">
          Shop Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
