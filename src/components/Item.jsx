import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Item = ({ product }) => {
  return (
    <div className='group flex flex-col relative'>
      <Link to={`/products/${product?.id}`} className='w-full'>
        <div className='relative w-full aspect-square overflow-hidden rounded-2xl bg-[#f6f6f6] flex items-center justify-center p-6 border border-gray-100 group-hover:border-black transition-colors duration-500'>
          {/* Product Image */}
          <img 
            src={product?.image} 
            alt={product?.name} 
            className='h-full w-full object-contain filter drop-shadow-md group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-700 ease-out' 
          />
          
          {/* Quick View Icon */}
          <div className='absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm'>
            <ArrowUpRight size={16} className='text-black' />
          </div>
        </div>
      </Link>
      
      <div className='mt-5 flex flex-col gap-1'>
        <div className='flex justify-between items-start gap-4'>
          <h3 className='text-sm md:text-base font-black uppercase tracking-tight text-black leading-tight'>
            <Link to={`/products/${product?.id}`} className='hover:underline underline-offset-4'>
              {product?.name}
            </Link>
          </h3>
          <p className='text-sm md:text-base font-black text-black shrink-0'>
            ${product?.new_price}
          </p>
        </div>
        <p className='text-xs font-bold text-gray-400'>1 Color</p>
      </div>
    </div>
  )
}

export default Item
