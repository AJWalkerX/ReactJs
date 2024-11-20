import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { XDispatch } from "../../store";
import { fetchRegister } from "../../store/feature/authSlice";

function RegisterPage() {
  const dispatch = useDispatch<XDispatch>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const kaydet = () => {
    console.log(username, password, rePassword, email);
    dispatch(fetchRegister({ username, password, rePassword, email }));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 className="text-center mb-3 text-success">Register From</h1>
          <div className="mb-3">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => {
                setRePassword(e.target.value);
                setIsWrong(password !== e.target.value);
              }}
              type="password"
              placeholder="RePassword"
              className="form-control"
            />
            {isWrong ? (
              <label className="text-danger">* Şifreler uyuşmuyor</label>
            ) : null}
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="mb-3 d-grid">
            <button className="btn btn-secondary" onClick={kaydet}>
              Register
            </button>
          </div>
          <div className="mb-3 d-grid">
            <NavLink to={"/login"} className="btn btn-primary">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
