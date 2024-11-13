import React, { useState } from 'react'

function Odev2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [age, setAge] = useState(0);
  const [isWrong,setIsWrong] = useState(false);
  const [user, setUser] = useState({
    'username': '',
    'password': '',
    'age': 0
  });
  const kaydet = () => {
    setUser({
      username,password,age
    })
  }

  return (
    <div className='container'>
      <div className='row mt-4'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h1 className='text-center mb-3 text-success'>Register From</h1>
          <div className='mb-3'>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' className='form-control' />
          </div>
          <div className='mb-3'>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='form-control' />
          </div>
          <div className='mb-3'>
            <input onChange={(e) =>{
                  setRePassword(e.target.value)
                  setIsWrong(password !== e.target.value)
                } 
              } type="password" placeholder='RePassword' className='form-control' />
            {
              isWrong 
              ? <label className='text-danger'>* Şifreler uyuşmuyor</label>: null
            }
          </div>
          <div className='mb-3'>
            <input onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder='Age' className='form-control' />
          </div>
          <div className='mb-3 d-grid'>
            <button className='btn btn-secondary' onClick={kaydet}>Register</button>
          </div>
          <div>
                <label>userName...: {user.username} </label>                    
                </div>
                <div>
                <label>password...: {user.password} </label>                    
                </div>
                <div>
                <label>age...: {user.age}</label>                    
                </div>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}

export default Odev2