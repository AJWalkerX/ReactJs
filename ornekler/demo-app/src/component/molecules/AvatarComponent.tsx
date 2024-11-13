import React, { useState } from 'react'
import { IUserAvatar } from '../../models/IUserAvatar'

function AvatarComponent(user: IUserAvatar) {
    const [isActive, setIsActive] = useState(user.isActive);
    const checkedEvent = (evt: any)=>{
    setIsActive(evt.target.checked);
}
const getBodyClass = (state: boolean) => {
    return state ? "col-3 m-2 border rounded-3 shadow p-4 text-bg-success" : "col-3 m-2 border rounded-3 shadow p-4 text-bg-secondary"
}
  return (
        <div className={getBodyClass(isActive)}>
            <div className='mb-3 text-center align-self-center'>
                <img src={user.avatar} alt={""+ user.userId} className='img-fluid rounded-circle'/>
            </div>
            <div className='mb-3 form-check form-switch'> 
                <input onChange={checkedEvent} type="checkbox" role='switch' className='form-check-input' id='flexSwitchCheckDefault' defaultChecked={isActive} />
            </div>
        </div>
)
}

export default AvatarComponent