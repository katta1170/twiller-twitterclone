import React from "react";
import Widgets from "./Widgets/Widgets";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userauthcontext";
const Home = () => {
  const {logOut,user}=useUserAuth()
  const navigate = useNavigate();
  //const user = {
  //displayName: "katta Lokesh",
  //email: "kattalokesh08@gmail.com",
  //};
  const handlelogout = async () => {
    try {
      await logOut()
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="app">
      <Sidebar handlelogout={handlelogout} user={user} />
      <Outlet />
      <Widgets />
    </div>
  );
};

export default Home;
