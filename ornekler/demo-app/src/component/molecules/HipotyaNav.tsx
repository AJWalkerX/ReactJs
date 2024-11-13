import React from 'react'
import HipotyaNavItem from '../atoms/HipotyaNavItem'
import { dataProperties } from '../../utils/data';

function HipotyaNav() {

  return (
    <div className='row shadow m-2 p-3'>
        {dataProperties.map((prop, index)=>{
            return <HipotyaNavItem key={index} tabName={prop}/>
        })
        }
        
    </div>
    
    
  )
}

export default HipotyaNav