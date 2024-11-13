import React from 'react'
interface tabName{
    tabName: string
}
function HipotyaNavItem(tabName: tabName) {
  return (
    <div className='col-2'>
        <input style={{marginRight: '6px'}} type="checkbox" name="" id={tabName.tabName} />
        <label htmlFor={tabName.tabName}>{tabName.tabName}</label>
        
    </div>
  )
}

export default HipotyaNavItem