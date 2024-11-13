import React from 'react'
import ProductButton from '../atoms/ProductButton'
interface Item{
  kimlik: number,
  ad: string,
  tur: string,
  image: string,
  fiyat: number
}

function ProductCard(item: Item) {
  return (
    <div className="row card shadow" style={{width: '18rem', margin: '15px'}}>
  <img src={item.image} style={{ width: '200px', height: '200px', marginBlock: '25px', marginInline: 'auto'}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.ad}</h5>
    <p className="card-text">{item.tur}</p>
    <p className="card-text">{item.fiyat}₺</p>
    <div className='d-inline-block'>
    <ProductButton tip='fa fa-heart'/>
        <ProductButton tip='fa fa-bookmark'/>
        <ProductButton tip='fa fa-comment'/>
    </div>
  </div>
</div>
  )
}

export default ProductCard