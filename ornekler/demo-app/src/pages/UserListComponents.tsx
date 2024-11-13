import React, { useState } from 'react'
import UserComponent from '../component/molecules/UserComponent';

function UserListComponents() {
        const [userList, setUserList] = useState(
            [{   "userName": "rbumpas0",   "name": "Rani Bumpas",   "isActive": false }, {   "userName": "ewindridge1",   "name": "Esra Windridge",   "isActive": true }, {   "userName": "lverne2",   "name": "La verne Andress",   "isActive": false }, {   "userName": "gburnham3",   "name": "Gardy Burnham",   "isActive": true }, {   "userName": "tabrashkin4",   "name": "Talia Abrashkin",   "isActive": false }, {   "userName": "gchittock5",   "name": "Georgie Chittock",   "isActive": true }, {   "userName": "rgreenmon6",   "name": "Reube Greenmon",   "isActive": true }, {   "userName": "mcundey7",   "name": "Megan Cundey",   "isActive": true }, {   "userName": "dwilsone8",   "name": "Dyane Wilsone",   "isActive": true }, {   "userName": "snorwood9",   "name": "Scotty Norwood",   "isActive": false }, {   "userName": "jaspolea",   "name": "Jeniffer Aspole",   "isActive": false }, {   "userName": "mparissb",   "name": "Malissa Pariss",   "isActive": true }, {   "userName": "spynerc",   "name": "Sax Pyner",   "isActive": false }, {   "userName": "neynaudd",   "name": "Nicola Eynaud",   "isActive": false }, {   "userName": "cdichee",   "name": "Claudius Diche",   "isActive": true 
    
        }])
    
        
        
      return (
        <div className='container'>
            <div className="row  mt-4 mb-3">
                <input type="text" className='form-control' />
            </div>
            <div className="row justify-content-center">
                {
                    userList.map((user, index) => {
                        return (
                              <UserComponent key={index} userName={user.userName} name={user.name} isActive={user.isActive}/>  
                        )
                    })
                }
               
            </div>
        </div>
      )
}

export default UserListComponents