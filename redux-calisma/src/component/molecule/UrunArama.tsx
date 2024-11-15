import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductDispatch } from '../../store'

function UrunArama() {
 
  return (
    <div className="col p-3  rounded-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <label className='form-label'>ürün arama</label>
        <div className='row'>
            <div className='col-10'>
                <input type="text"
                className="form-control" />
            </div>
            <div className='col-2 d-grid'>
                <input type="button" className='btn btn-warning' value='ara' />
            </div>
        </div>
    </div>
  )
}

export default UrunArama