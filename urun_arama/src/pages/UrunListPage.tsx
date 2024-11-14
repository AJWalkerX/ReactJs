import React from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organisms/UrunListesi'

function UrunListPage() {
  return (
    <div className='container'>
        <div className="row mt-3 shadow p-3">
            <UrunArama />
        </div>
        <div className="row mt-3 shadow p-3">
            <UrunListesi />

        </div>
    </div>
  )
}

export default UrunListPage