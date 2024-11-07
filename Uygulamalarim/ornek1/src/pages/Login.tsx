import React from 'react'
import swal from 'sweetalert';
export default function Login() {
    const kaydet = () => {
      swal("Tebrikler", "Giriş Yapıldı", "success");  
    };
  return (
    <div>
        <label htmlFor="">Kullanıcı Adı</label> <br /><br />
        <input type="text" /> <br /> <br />
        <label htmlFor="">Parola</label> <br /><br />
        <input type="password" /> <br /> <br />
        <button onClick={kaydet}>Giriş Yap</button>
    </div>
  )
}

