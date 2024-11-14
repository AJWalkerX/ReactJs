import React, { useState } from 'react'
import UrunArama from '../component/molecule/UrunArama'
import UrunListesi from '../component/organism/UrunListesi'
import Sepet from '../component/organism/Sepet'

function ProductPage() {
    // const [sepetList, setSepetList] = useState<IProduct[]>([]);
    // const sepeteEkle = (urun: IProduct) =>{
    //     console.log(sepetList);
    //     setSepetList([...sepetList, urun]);
    // }
  return (
    <div className='container'>
        <div className='row mt-4'>
            <div className="col-8">
                <div className="row">
                    <UrunArama />
                </div>
                <div className="row">
                    <UrunListesi /*sepeteEkle={sepeteEkle}*//>
                </div>
            </div>
            <div className="col-4">
                <Sepet/>
            </div>
        </div>
    </div>
  )
}

export default ProductPage