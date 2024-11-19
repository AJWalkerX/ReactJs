import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ozellikDispatch, useAppSelector } from '../store';
import OzellikList from '../component/molecules/OzellikList';

function OzellikPage() {
    console.log('OzellikPage');
    return (
    <div className='container mt-5 shadow rounded-3 p-3'>
        <div className='row'>
            <h1 className='text-center'> Sahip olduğunuz Yazılım Bilgileri (max 7 özellik)</h1>
        </div>
        <hr />
        <div className='row mt-3'>
            <OzellikList />
        </div>
    </div>
  )
}

export default OzellikPage