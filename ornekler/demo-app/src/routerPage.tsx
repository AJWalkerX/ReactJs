import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Odev from "./pages/Odev";
import Odev2 from "./pages/Odev2";
import OrnekPage from "./pages/ornekPage";
import UserList from "./pages/UserList";
import UserListComponents from "./pages/UserListComponents";
import UserAvatarList from "./pages/UserAvatarList";
import UserPage from "./pages/UserPage";
import Yarisma from "./pages/Yarisma";
import YarismaCozum from "./pages/YarismaCozum";
import Hitopya from "./pages/Hitopya";
import HitopyaCozum from "./pages/HipotyaCozum";
import Home from "./pages/Home";

function RouterPage() {
  const [token, setToken] = useState<String | null>(null);
  useEffect(() => {
    const getToken = sessionStorage.getItem("access_token");
    setToken(getToken);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Odev" element={token === null ? <Login /> : <Odev />} />
        <Route path="/Odev2" element={<Odev2 />} />
        <Route path="/OrnekPage" element={<OrnekPage />} />
        <Route path="/UserList" element={<UserList />} />
        <Route path="/UserListComponents" element={<UserListComponents />} />
        <Route path="/UserAvatarList" element={<UserAvatarList />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/Yarisma" element={<Yarisma />} />
        <Route path="/YarismaCozum" element={<YarismaCozum />} />
        <Route path="/Hitopya" element={<Hitopya />} />
        <Route path="/HipotyaCozum" element={<HitopyaCozum />} />,
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterPage;
