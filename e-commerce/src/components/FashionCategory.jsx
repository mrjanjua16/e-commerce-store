import React from 'react';
import FashionCategoryCard from './FashionCategoryCard';
import fashionImage1 from '../assets/men-coll.png';
import fashionImage2 from '../assets/women-coll.png';

export default function FashionCategory() {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-6">
      <FashionCategoryCard
        image={fashionImage1}
        title={<><span>Men’s Casual</span><br /><span>Fashion Style</span></>}
        textPosition="right"
      />
      <FashionCategoryCard
        image={fashionImage2}
        title={<><span>Women’s Casual</span><br /><span>Fashion Style</span></>}
        textPosition="left"
      />
    </div>
  );
}
