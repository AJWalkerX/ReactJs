import React from 'react'
import HipotyaNav from '../component/molecules/HipotyaNav'
import ProductList from '../component/organism/ProductList'
import ItemCard from '../component/molecules/ProductCard'

function Hitopya() {
  return (
    <div className='container-fluid border'>
        <HipotyaNav/>
        <div className='row'>
            <ProductList/>
        </div>
        
    </div>
  )
}

export default Hitopya