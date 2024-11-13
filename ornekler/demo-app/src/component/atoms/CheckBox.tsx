import React from 'react'

function CheckBox(props: {name : string}) {
  return (
    <div className='form-check'>
        <input type="checkbox" className='form-check-input' />
        <label className='form-check-label'>{props.name}</label>
    </div>
  )
}

export default CheckBox