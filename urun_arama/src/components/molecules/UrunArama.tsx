import React from 'react'

function UrunArama() {
  return (
    <>
      <div className="col-10">
        <input type="text" className='form-control'/>
      </div>
      <div className="col-2 d-grid">
        <input type="button" value="Ara" className='btn btn-warning'/>
      </div>
    </>
  )
}

export default UrunArama