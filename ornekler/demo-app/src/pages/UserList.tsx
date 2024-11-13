import React, { useState } from 'react'

function UserList() {
    const [userList, setUserList] = useState(
        [{   "userName": "rbumpas0",   "name": "Rani Bumpas",   "isActive": false }, {   "userName": "ewindridge1",   "name": "Esra Windridge",   "isActive": true }, {   "userName": "lverne2",   "name": "La verne Andress",   "isActive": false }, {   "userName": "gburnham3",   "name": "Gardy Burnham",   "isActive": true }, {   "userName": "tabrashkin4",   "name": "Talia Abrashkin",   "isActive": false }, {   "userName": "gchittock5",   "name": "Georgie Chittock",   "isActive": true }, {   "userName": "rgreenmon6",   "name": "Reube Greenmon",   "isActive": true }, {   "userName": "mcundey7",   "name": "Megan Cundey",   "isActive": true }, {   "userName": "dwilsone8",   "name": "Dyane Wilsone",   "isActive": true }, {   "userName": "snorwood9",   "name": "Scotty Norwood",   "isActive": false }, {   "userName": "jaspolea",   "name": "Jeniffer Aspole",   "isActive": false }, {   "userName": "mparissb",   "name": "Malissa Pariss",   "isActive": true }, {   "userName": "spynerc",   "name": "Sax Pyner",   "isActive": false }, {   "userName": "neynaudd",   "name": "Nicola Eynaud",   "isActive": false }, {   "userName": "cdichee",   "name": "Claudius Diche",   "isActive": true 

    }])

    /**
         * DİKKAT!!!!!
         * bir arrow fonksiyon eğer ek parametre almayacak ise ilgili methodların gövdelerine direkt
         * sarılarak kullanılabilir. Mesela:
         * 1.Adım:
         *  const checkedEvent = (evt: any){}
         * 2. Adım
         *  onChange={checkedEvent}
         * buradaki kullanım onChange propsunun içinde zaten evt parametresi olduğu için ek bir 
         * kullanıma gerek kalmadan checkedEvent eklenebiliyor.
         * Ancak bir arrow method içinde özel ek parametreler istiyor is ilgili handle method ayrı bir gövdeye 
         * sahip olacak şekilde kodlanmalıdır. Mesela:
         * 1. Adım:
         * const checkedEvent = (isActive: boolean, index: number )=>{}
         * 2. Adım: 
         * onChange= {evt=>{ checkedEvent(DEĞER,DEĞER)}}
         */
    const checkedEvent = (isActive: boolean, index:number) => {
        let list = userList.map((user, i) => {
            if(i === index) user.isActive = isActive;
            return user
        })
        setUserList(list)
    }
    
  return (
    <div className='container'>
        <div className="row  mt-4 mb-3">
            <input type="text" className='form-control' />
        </div>
        <div className="row justify-content-center">
            {
                userList.map((user, index) => {
                    return (
                            <div key={index} className={
                                user.isActive ? "col-3 border rounded-3 shadow p-4 text-bg-success" : "col-3 border rounded-3 shadow p-4 text-bg-secondary"
                            }>
                                <div className='mb-3'>
                                    <label className='from-label'>Username: {user.userName}</label>
                                </div>
                                <div className='mb-3'>
                                 <label className='from-label'>{user.name}</label>
                                </div>
                                <div className='mb-3 form-check form-switch'> 
                                    <input onChange={evt => checkedEvent(evt.target.checked, index)} type="checkbox" role='switch' className='form-check-input' id='flexSwitchCheckDefault' defaultChecked={user.isActive} />
                                </div>
                            </div>
                    )
                })
            }
           
        </div>
    </div>
  )
}

export default UserList