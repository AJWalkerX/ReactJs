import React from 'react'
import UrunItem from '../molecule/UrunItem'
import { IProduct } from '../../models/IProduct'
import { useAppSelector } from '../../store';
function Sepet() {
    const sepetList : IProduct[] = useAppSelector(gState => gState.product.sepetListesi);
    const totalPrice = sepetList.reduce((total, urun) => total + urun.price, 0);
    const totalPriceFormated = Number(totalPrice.toFixed(2));
    const totalKdv = Number((totalPriceFormated * 0.18).toFixed(2));
    const totalPriceWithKdv = Number((totalPriceFormated + totalKdv).toFixed(2));
    const sepetListLength = sepetList.length;
    return (
    <div className='row p-3 rounded-3 ms-2' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <div className='col'>
            <div className="row">
                <div className="col">
                    <label className="form-label">Sepet</label>
                </div>
                <div className="col text-end">
                    <label className="form-label">{sepetListLength} Adet ürün</label>
                </div>
                <hr />
            </div>
            <div className="row text-end">
                {
                    sepetList.map((urun, index) =>{ 
                    return <UrunItem 
                        key={index} 
                        image={urun.thumbnail} 
                        title={urun.title} 
                        price={urun.price} />})
                }
                
                <label className='form-label'>Toplam: {totalPriceFormated}₺</label>
                <label className='form-label'>KDV: {totalKdv}₺</label>
                <label className='form-label'>G.Toplam: {totalPriceWithKdv}₺</label>
            </div>
            <div className="row d-grid">
                <input type="button" value="Satıl al" className="btn btn-success" />
            </div>
        </div>
    </div>
  )
}

export default Sepet