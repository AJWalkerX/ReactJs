import React, { useState } from 'react'

function Odev() {
    const [sayi1, setSayi1] = useState(0)
    const [sayi2, setSayi2] = useState(0)
    const [sonuc, setSonuc] = useState(0)
    const [isEmpty, setIsEmpty] = useState(false);
    const[isNan, setIsNan] = useState(false);

 const topla = () => {
    if(isNaN(sayi1) || isNaN(sayi2)) {
        setIsNan(true)
        setSonuc(0)
        return
    }
    if(sayi1 === 0 || sayi2 === 0) {
        setIsEmpty(true)
        return
    }
    setIsEmpty(false)
    setIsNan(false)
    setSonuc(sayi1 + sayi2)
 }
  return (
    <div className='container'>
        <div className='row mt-4'>
            <div className='col-3'></div>
            <div className='col-6'>
                <div className='mb-3'>
                    <label className='form-label'>Sayı 1</label>
                    <input type="text" placeholder='1. Sayıyı giriniz' className='form-control' onChange={(e) => setSayi1(Number(e.target.value))} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Sayı 2</label>
                    <input type="text" placeholder='2. Sayıyı giriniz' className='form-control' onChange={(e) => setSayi2(Number(e.target.value))} />
                </div>
                <div className='mb-3' style={{display: 'flex', justifyContent: 'end'}}>
                    <button className='btn btn-primary' onClick={topla}>Sonucu topla</button>
                </div>
            </div>
            <div className='col-3'></div>
            {
                isNan
                ? <div className='alert alert-danger'>
                    <p>Girilen değerler Numarik olmalıdır!</p>
                </div> : null
            }
            {
                isEmpty 
                ? <div className='alert alert-warning'>
                    <p>Sayıları boş geçemezsiniz</p>
                </div>
                : <div className='alert alert-info'>sonuc: {sonuc}</div>
            }
        </div>
    </div>
  )
}

export default Odev