import React from 'react'

function OzelCheckBox(props: any) {
  return (
    <div>
        <input type="checkbox" className='form-check-input me-2' />
        <label>{props.name}</label>
    </div>
  )
}

export default OzelCheckBox