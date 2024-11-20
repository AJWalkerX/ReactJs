import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import ForgotPasswordPage from "./page/ForgotPasswordPage";

function RouterPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
