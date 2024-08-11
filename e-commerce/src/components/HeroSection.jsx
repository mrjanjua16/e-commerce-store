import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import NavButton from './NavButton';
import { Spinner } from 'flowbite-react';

export default function HeroSection() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          setBanners(data.data);
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
        <Spinner color='gray' size='xl' />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Failed to load banners. Please try again later.</p>
      </div>
    );


    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === 0 ? banners.length - 1 : prevIndex - 1;
        console.log('Previous Index:', newIndex); // Debugging log
        return newIndex;
      });
    };
    
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex === banners.length - 1 ? 0 : prevIndex + 1;
        console.log('Next Index:', newIndex); // Debugging log
        return newIndex;
      });
    };

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banners.length > 0 ? banners[currentIndex].imageUrl : ''})` }}
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
        {/* Navigation Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:mt-[14.25rem] md:mr-8">
        <NavButton direction="left" onClick={handlePrevClick} />
        <NavButton direction="right" onClick={handleNextClick} />
      </div> 
      </div>
    </div>
  );
}
