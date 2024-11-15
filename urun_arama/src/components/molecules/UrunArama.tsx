import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchProduct } from '../../store/feature/UrunSlice' // Adjust the path to where fetchSearchProduct is located
import { productDispatch } from '../../store'

function UrunArama() {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch<productDispatch>()

  const handleSearch = () => {
    if (search) {
      dispatch(fetchSearchProduct(search))
    }
  }

  return (
    <div className="col p-3 rounded-3" style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <label className='form-label'>ürün arama</label>
      <div className='row'>
        <div className='col-10'>
          <input 
            type="text" 
            className="form-control" 
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div className='col-2 d-grid'>
          <input 
            type="button" 
            onClick={handleSearch} 
            className='btn btn-warning' 
            value='ara' 
          />
        </div>
      </div>
    </div>
  )
}

export default UrunArama
