import React from 'react'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import Description from './Description'
import { useParams } from 'react-router-dom'
import all_product from '../Utils/all_product'

const SingleProduct = () => {
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div className='max-w-[1440px] mx-auto mb-32 mt-14 px-4 sm:px-6 lg:px-8'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <Description product={product}/>
    </div>
  )
}

export default SingleProduct
