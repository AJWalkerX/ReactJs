import React from 'react'
import { IUserProfile } from '../../models/IUserProfile'

interface IUserProfileProps {
    userProfile: IUserProfile
    isAdmin: boolean
}

function UserProfile(props: IUserProfileProps) {
  return (
    <>
        <div className='row m-2 justify-content-center'>
                    <img src={props.userProfile.photo} style={{borderRadius:"50%", width:"150px"}} alt="" />
                </div>
                <div className='row m-2'>
                    <input type="text" className='form-control'  placeholder='username' value={props.userProfile.username}/>
                </div>
                <div className='row m-2'>
                    <input type="password" className="form-control" placeholder='password' value={props.userProfile.password}/>
                </div>
                <div className='row m-2'>
                    <input type="tel" className="form-control" placeholder='phone' value={props.userProfile.phone}/>
                </div>
                <div className='row d-grid m-2'>
                    <button className='btn btn-primary'>Güncelle</button>
                </div>
    </>
  )
}

export default UserProfile