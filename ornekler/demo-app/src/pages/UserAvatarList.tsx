import React, { useState } from 'react'
import AvatarComponent from '../component/molecules/AvatarComponent'
import avatarList from '../utils/avatarList.json'

function UserAvatarList() {
    const [userList, setUserList] = useState(avatarList)
    
  return (
    <div className='container'>
        <div className="row mt-5">
            {
                userList.map((user, index) => {
                    return(
                        <AvatarComponent key={index} userId={user.id} avatar={user.avatar} isActive={user.isActive}/>
                    )
                })
            }
           
        </div>
    </div>
  )
}

export default UserAvatarList