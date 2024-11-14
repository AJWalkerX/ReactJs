import React from 'react'
import { IProduct } from '../../models/IProduct'
import { useDispatch } from 'react-redux';
import { ProductDispatch } from '../../store';
import { addSepetList } from '../../store/feature/productSlice';

interface IUrunCardProps {
    urun: IProduct
    // sepeteEkle: (urun: IProduct) => void
}

function UrunCard(props: IUrunCardProps) {
    const dispatch = useDispatch<ProductDispatch>();
    const urun = props.urun;
  return (
    <div className='col-4 mt-3'>
        <div className="card">
        <img src={urun.thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{urun.category}</h5>
            <p className="card-text">{urun.title}</p>
            <p className="card-text">{urun.price} $</p>
            <div className='d-grid'>
            <input onClick={() => {dispatch(addSepetList(urun))}} type="button" className="btn btn-outline-info" value="Sepete Ekle" />
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default UrunCard