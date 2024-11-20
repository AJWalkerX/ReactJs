import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="logo.png"
            style={{ width: "80px", height: "80px", borderRadius: "50%" }}
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="navbar-brand">Sinema App</h1>
          </Link>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <div>
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div>
              <Link to="/login">
                <div
                  className="border border-1 border-dark mx-2 px-2 py-1 rounded"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-user"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
