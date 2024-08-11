import { useState } from 'react';
import NavButton from '../components/NavButton';

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = ['Banner 1', 'Banner 2', 'Banner 3']; // Example banners

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
    <div>
      <p>Current Index: {currentIndex}</p>
      {/* Navigation Buttons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:mt-[14.25rem] md:mr-8">
        <NavButton direction="left" onClick={handlePrevClick} />
        <NavButton direction="right" onClick={handleNextClick} />
      </div> 
    </div>
  );
}