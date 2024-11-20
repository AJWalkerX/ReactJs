import React from "react";
import Login from "../components/molecules/Login";
import Navbar from "../components/molecules/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />
      <div
        className="container d-grid align-items-center"
        style={{ height: "60vh", width: "70%" }}
      >
        <Login />
      </div>
    </>
  );
}

export default LoginPage;
