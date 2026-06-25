import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const {product} = props;
    if (!product) return null;

    // Map categories to their respective routes
    const categoryPath = product.category === 'men' ? '/mens' 
                       : product.category === 'women' ? '/womens' 
                       : product.category === 'kid' ? '/kids' 
                       : '/';

   return (
    <div className='flex items-center md:gap-2 gap-1 px-6 md:px-0 text-[#5e5e5e] font-semibold md:text-lg capitalize mt-4 text-sm'>
      <Link to="/" className='hover:text-black transition-colors duration-200'>HOME</Link> 
      <ChevronRight className='w-4 h-4 md:w-5 md:h-5 text-gray-400' /> 
      <Link to={categoryPath} className='hover:text-black transition-colors duration-200'>SHOP</Link> 
      <ChevronRight className='w-4 h-4 md:w-5 md:h-5 text-gray-400' /> 
      <Link to={categoryPath} className='hover:text-black transition-colors duration-200'>{product.category}</Link> 
      <ChevronRight className='w-4 h-4 md:w-5 md:h-5 text-gray-400' /> 
      <span className='text-black truncate'>{product.name}</span>
    </div>
  )
}

export default Breadcrum
