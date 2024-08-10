import React from 'react'
import FashionCategoryCard from './FashionCategoryCard'

export default function FashionCategory() {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 p-6">
      <FashionCategoryCard
        image="https://source.unsplash.com/600x400/?fashion,man"
        title="Men’s Casual Fashion Style"
      />
      <FashionCategoryCard
        image="https://source.unsplash.com/600x400/?fashion,woman"
        title="Women’s Casual Fashion Style"
      />
    </div>
    </div>
  )
}
