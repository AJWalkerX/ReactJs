import React from "react";
import Navbar from "../components/molecules/Navbar";
import Register from "../components/molecules/Register";

function RegisterPage() {
  return (
    <>
      <Navbar />
      <div
        className="container d-grid align-items-center"
        style={{ height: "60vh", width: "70%" }}
      >
        <Register />
      </div>
    </>
  );
}

export default RegisterPage;
