import React from "react";
import "../Pages.css";
import Mainprofile from "./Mainprofile/Mainprofile";
import { useUserAuth } from "../../context/userauthcontext";
const Profile = () => {
  const { user } = useUserAuth();
  // const user = {
  //   displayname: "bithead",
  //   email: "bithead@gmail.com",
  // };
  return (
    <div className="profilePage">
      <Mainprofile user={user} />
    </div>
  );
};

export default Profile;
