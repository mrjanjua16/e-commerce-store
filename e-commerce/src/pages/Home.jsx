import React from 'react'

import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import FashionCategory from '../components/FashionCategory'
import ProductGrid from '../components/ProductGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import NewArrivals from '../components/NewArrivals'
import NewCollections from '../components/NewCollections'
import BrandLogos from '../components/BrandLogos'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <div className="bg-gray-100 font-sans">
                <HeroSection />
                <FeaturesSection />
                <FashionCategory />
                <ProductGrid />
                <WhyChooseUs />
                <NewArrivals />
                <NewCollections />
                <BrandLogos />
                <Footer />
            </div>
        </div>
    )
}