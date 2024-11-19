import React, { useState } from "react";
import swal from "sweetalert";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isUsernameEmpty, setUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  // get işleminde sadece url yeterli iken sunucuya veri iletecek işlemlerde
  //put, delete, post işlemlerinde fetch için diğer parametreler eklenmelidir.
  const login = () => {
    setUsernameEmpty(username === "");
    setPasswordEmpty(password === "");

    if (username === "" || password === "") {
      setIsEmpty(true);
      return;
    } else setIsEmpty(false);

    fetch("http://localhost:9090/v1/dev/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("access_token", res.data);
        if (res.code === 200) {
          swal({
            title: "Başarılı",
            text: "Giriş Başarılı",
            icon: "success",
          });
        } else {
          swal({
            title: "Hata",
            text: res.message,
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          {isEmpty ? (
            <div className="alert alert-warning" role="alert">
              <h4 className="alert-heading">Uyarı</h4>
              <hr />
              <p>Kullanıcı adı ve şifre alanları dolu olmalıdır!</p>
            </div>
          ) : null}
          {isUsernameEmpty ? (
            <div className="mb-3">
              <label style={{ color: "red" }} className="form-label">
                Kullanıcı Adı
              </label>
              <input
                style={{ borderColor: "red" }}
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
          ) : (
            <div className="mb-3">
              <label className="form-label">Kullanıcı Adı</label>
              <input
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>
          )}
          {isPasswordEmpty ? (
            <div className="mb-3">
              <label style={{ color: "red" }} className="form-label">
                Şifre
              </label>
              <input
                style={{ borderColor: "red" }}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>
          ) : (
            <div className="mb-3">
              <label className="form-label">Şifre</label>
              <input
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>
          )}

          <div className="mb-3">
            <button onClick={login} className="btn btn-success">
              Giriş Yap
            </button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Login;
