import React from "react";

function ForgotPassword() {
  return (
    <>
      <div className="card text-center" style={{ width: "300px;" }}>
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we'll send you an email with
            instructions to reset your password.
          </p>
          <div data-mdb-input-init className="form-outline">
            <input type="email" id="typeEmail" className="form-control my-3" />
            <label className="form-label">Email input</label>
          </div>
          <button data-mdb-ripple-init className="btn btn-primary w-100">
            Reset password
          </button>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
