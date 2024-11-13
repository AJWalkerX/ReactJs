import React from 'react'
import ProductCard from '../molecules/ProductCard'
import { dataProductList } from '../../utils/data'

function ProductList() {
  console.log(dataProductList);
  return (
    <div className='m-1 shadow d-flex flex-wrap'>
        {
          dataProductList.map((data, index)=>{
            return <ProductCard key={index}
            kimlik={data.id} ad={data.ad}
            tur={data.tur} fiyat={data.fiyat}
            image={data.image}
            />
          })
        }
    </div>
  )
}

export default ProductList