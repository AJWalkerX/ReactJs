import React, { useState } from "react";
import swal from "sweetalert";
import "./LoginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { XDispatch, XUserSelector } from "../../store";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/feature/authSlice";

function LoginPage() {
  const dispatch = useDispatch<XDispatch>();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isUsernameEmpty, setUsernameEmpty] = useState(false);
  const [isPasswordEmpty, setPasswordEmpty] = useState(false);
  // get işleminde sadece url yeterli iken sunucuya veri iletecek işlemlerde
  //put, delete, post işlemlerinde fetch için diğer parametreler eklenmelidir.
  const doLogin = () => {
    setUsernameEmpty(username === "");
    setPasswordEmpty(password === "");

    if (username === "" || password === "") {
      setIsEmpty(true);
      return;
    } else setIsEmpty(false);

    dispatch(fetchLogin({ username, password })).then((data) => {
      if (data.payload.code === 200) {
        navigate("/");
      }
    });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6">
          <div className="mb3 text-center">
            <img
              src="/java15logo.jpg"
              width={150}
              height={150}
              style={{ borderRadius: "100%" }}
            />
            <br />
            <label className="form-label mt-2 "> Java 15 Uygulama</label>
          </div>
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
            <div className="row">
              <div className="col d-grid">
                <button onClick={doLogin} className="btn btn-success">
                  Giriş Yap
                </button>
              </div>
              <div className="col d-grid">
                <NavLink to="/register" className="btn btn-primary">
                  Kayıt Ol
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
