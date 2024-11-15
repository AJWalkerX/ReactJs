import React from 'react'
import { IProduct } from '../../models/IProduct'

function UrunCard(props: {urun: IProduct}) {
  const urun = props.urun
  return (
    <div className='col-4 mt-3'>
        <div className="card">
            <div className='card-img p-2'>
                <img src={urun.thumbnail} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{urun.title}</h5>
                <p className="card-text">{urun.category}</p>
                <p className="card-text">{urun.price}₺</p>

            </div>
        </div>
    </div>
    
  )
}

export default UrunCard