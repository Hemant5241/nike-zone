import React from 'react'
import all_product from '../Utils/all_product'
import Item from './Item'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

const ProductList = (props) => {
  
  // Dynamic Content based on category
  const getCategoryDetails = () => {
    switch (props.category) {
      case 'men':
        return { title: "MEN'S COLLECTION", subtitle: "Engineered for maximum performance and everyday dominance. Discover the latest drops designed to push your limits." }
      case 'women':
        return { title: "WOMEN'S COLLECTION", subtitle: "Unleash your potential with styles built for strength, speed, and uncompromising comfort. Lead the pack." }
      case 'kids':
        return { title: "KIDS' COLLECTION", subtitle: "The next generation of greatness starts here. Premium athletic gear built for non-stop play and future champions." }
      default:
        return { title: "LATEST ARRIVALS", subtitle: "Explore our newest innovations in athletic footwear and apparel." }
    }
  }

  const details = getCategoryDetails()

  return (
    <div className='bg-white min-h-screen pb-24'>
      
      {/* Massive Header Section */}
      <div className='bg-[#f6f6f6] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-gray-200 overflow-hidden relative'>
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none opacity-5">
          <h1 className="text-[20vw] font-black uppercase tracking-tighter whitespace-nowrap">{props.category}</h1>
        </div>
        
        <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-black uppercase mb-2 md:mb-4'>
            {details.title}
          </h2>
          <p className='text-base md:text-lg text-gray-600 font-medium max-w-2xl leading-relaxed'>
            {details.subtitle}
          </p>
        </div>
      </div>

      <div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        
        {/* Utility Bar (Filters & Sort) */}
        <div className='flex items-center justify-between py-4 border-b border-gray-100 mb-8 sticky top-20 bg-white/90 backdrop-blur-md z-40'>
          <button className='flex items-center gap-2 text-black hover:text-gray-500 transition-colors font-bold text-xs uppercase tracking-widest'>
            <SlidersHorizontal size={18} />
            <span>Hide Filters</span>
          </button>
          
          <button className='flex items-center gap-2 text-black hover:text-gray-500 transition-colors font-bold text-xs uppercase tracking-widest'>
            <span>Sort By</span>
            <ChevronDown size={16} />
          </button>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 sm:gap-x-6 gap-y-8 sm:gap-y-12 xl:gap-x-8'>
          {all_product.map((product) => {
            if (props.category === product.category) {
              return <Item key={product.id} product={product} />
            }
            return null
          })}
        </div>
        
        {/* Load More Button */}
        <div className='mt-16 flex justify-center'>
          <button className='px-10 py-4 border-2 border-black text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-sm'>
            Load More Products
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductList
