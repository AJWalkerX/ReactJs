import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import Login from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage";
import { XUserSelector } from "./store";
function RouterPage() {
  const isLogin = XUserSelector((state) => state.auth.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <HomePage /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
