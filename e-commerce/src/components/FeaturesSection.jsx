import React from 'react';
import FeatureBlock from './FeatureBlock';

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
    </div>
  );
}
