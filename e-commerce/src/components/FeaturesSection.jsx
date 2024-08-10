import React from 'react';
import FeatureBlock from './FeatureBlock';
import NavButton from './NavButton';

export default function FeaturesSection() {
  return (
    <div className="relative flex flex-col md:flex-row md:items-center">
      {/* Content Blocks */}
      <div className="bg-white py-7 px-4 md:py-9 md:px-8 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center max-w-5xl -mt-10">
        <div className="flex flex-col md:flex-row justify-around w-full">
          <FeatureBlock title="Free Shipping" description="Fat new smallness few supposing" />
          <FeatureBlock title="99% Satisfied Customer" description="Fat new smallness few supposing" />
          <FeatureBlock title="Originality Guaranteed" description="Fat new smallness few supposing" />
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:mt-2 md:mr-8">
        <NavButton direction="left" />
        <NavButton direction="right" />
      </div>
    </div>
  );
}
