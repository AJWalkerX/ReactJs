import React from 'react'
import { IUrun } from '../../models/IUrun'
import LikeButton from '../atoms/LikeButton';

function UrunCard(props: {urun : IUrun}) {
    const urun = props.urun;
  return (
    <div className='card shadow m-2'>
        <img src={urun.image} alt={urun.ad} className='card-image-top p-5' />
        <div className="card-body">
            <h5 className='card-title'>{urun.tur}</h5>
            <p className='card-text'>{urun.ad}</p>
            <label className='form-label'>{urun.fiyat+ ' ₺'}</label>
            <div><LikeButton/></div>
            
        </div>
    </div>
  )
}

export default UrunCard