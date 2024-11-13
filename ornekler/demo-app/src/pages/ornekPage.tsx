import { arch } from 'os'
import React, { useState } from 'react'
import CheckIcons from '../component/molecules/CheckIcons'
import OzelCheckBox from '../component/atoms/OzelCheckBox'

function OrnekPage() {

  return (
    <div className='container'>
        <div className='row mt-4'>
            <OzelCheckBox name={'Yazılım'}/>
            <OzelCheckBox name={'Network'}/>
            <OzelCheckBox name={'Architect'}/>
            <OzelCheckBox name={'Boss'}/>
            <OzelCheckBox name={'Şef'}/>
            <div className='mt-2'>
                <button className='btn btn-danger'>Denetle</button>
            </div>
            <CheckIcons yazilim={true} network={true} architect={true} boss={true} sef={true}/>
        </div>
    </div>
  )
}

export default OrnekPage