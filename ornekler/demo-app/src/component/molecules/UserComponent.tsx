import React, { useState } from 'react'
import { IUser } from '../../models/IUser'
/**
 * TypeScript,
 * JS tip güvenliği olmayan bir dil, bu nedenle daha öngörülebilir bir yapı kurmak için 
 * TS geliştirildi. Burada değişkenler önceden belirlenebiliryor ve ayrıca kendi tiplerimizi yaratabiliyruz. 
 * JAVA'da class'a denk geliyor.
 */
function UserComponent(user: IUser) {
    const [isActive, setIsActive] = useState(user.isActive);
    const checkedEvent = (evt: any)=>{
    setIsActive(evt.target.checked);
}
    const getBodyClass = (state: boolean) => {
        return state ? "col-3 m-2 border rounded-3 shadow p-4 text-bg-success" : "col-3 m-2 border rounded-3 shadow p-4 text-bg-secondary"
    }
  return (
    <div className={getBodyClass(isActive)}>
        <div className='mb-3'>
            <label className='from-label'>Username: {user.userName}</label>
        </div>
        <div className='mb-3'>
         <label className='from-label'>{user.name}</label>
        </div>
        <div className='mb-3 form-check form-switch'> 
            <input 
            onChange={checkedEvent} 
            type="checkbox" role='switch' className='form-check-input' id='flexSwitchCheckDefault' defaultChecked={isActive} />
        </div>
    </div>
  )
}

export default UserComponent