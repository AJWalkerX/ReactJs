import React from 'react'

function UrunCard() {
  return (
    <div className='col-3'>
        <div className="card">
            <div className='card-img p-2'>
                <img src="https://picsum.photos/100/100" className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">bişey</p>
                <p className="card-text">fiyat</p>

            </div>
        </div>
    </div>
    
  )
}

export default UrunCard