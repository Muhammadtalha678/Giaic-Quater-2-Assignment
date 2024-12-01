import React from 'react'
import ProductCard from '@/components/ProductCard'
const Product = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center  sm:mx-20  mx-10 mt-10'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default Product
