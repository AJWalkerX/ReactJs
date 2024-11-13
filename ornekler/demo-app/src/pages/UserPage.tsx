import React from 'react'
import UserProfile from '../component/molecules/UserProfile'
import { IUserProfile } from '../models/IUserProfile'


function UserPage() {
    const userProfile: IUserProfile = {
        photo: 'https://picsum.photos/200/200',
        username: '',
        password: '',
        phone: ""
    }
  return (
    <div className="container">
        <div className='row mt-5 justify-content-center'>
            <div className='col-5 border rounded-3 shadow p-4'>
                <UserProfile userProfile={userProfile} isAdmin={false}/>
            </div>
        </div>
    </div>
  )
}

export default UserPage