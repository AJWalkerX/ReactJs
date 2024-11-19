import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const openPage = (page: string) => {
    navigate(page);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-6 border p-3">
          <h1 className="text-center mt-5">Home Page</h1>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Giriş Yap"
              onClick={() => openPage("/login")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Hipotya"
              onClick={() => openPage("/HipotyaCozum")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Hitopya"
              onClick={() => openPage("/Hitopya")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Odev"
              onClick={() => openPage("/Odev")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Odev2"
              onClick={() => openPage("/Odev2")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="ornekPage"
              onClick={() => openPage("/ornekPage")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="UserAvatar"
              onClick={() => openPage("/UserAvatarList")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="UserList"
              onClick={() => openPage("/UserList")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="UserListComponent"
              onClick={() => openPage("/UserListComponents")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="UserPage"
              onClick={() => openPage("/UserPage")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="Yarisma"
              onClick={() => openPage("/Yarisma")}
            />
          </div>
          <div className="mb-3 d-grid">
            <input
              type="button"
              className="btn btn-outline-success"
              value="YarismaCozum"
              onClick={() => openPage("/YarismaCozum")}
            />
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Home;
