import React, { useEffect, useState } from 'react'
import UrunCard from '../molecules/UrunCard'
import { useDispatch } from 'react-redux'
import { productDispatch, useAppSelector } from '../../store';
import { fetchGetAllProduct } from '../../store/feature/UrunSlice';

function UrunListesi() {
  const dispatch = useDispatch<productDispatch>();
  const searchList = useAppSelector(gState => gState.product.searchList);
  const isSearchLoading = useAppSelector(gState => gState.product.isSearchListLoading);


  useEffect(() => {
    dispatch(fetchGetAllProduct());
  },[])


  return (
      <div className='col'>
       <label className="form-label">Ürün Listesi</label>
       <div className="row ">
        {
         isSearchLoading ? <div className="col-12 text-center"><div className="spinner-border text-warning" role="status"><span className="visually-hidden">Loading...</span></div></div> : ''
        }
        {
        searchList?.length === 0 ? <div className="col-12 text-center">Aranan Ürün Bulunamadı</div> : ''
        }    
        {
          searchList?.map((item, index) => <UrunCard key={index} urun={item}/>)
        } 
       </div>
       
      </div>
          
  )
}

export default UrunListesi