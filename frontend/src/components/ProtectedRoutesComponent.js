import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./user/UserChatComponent";
const ProtectedRoutesComponent = (props) => {
  const { admin } = props;
  //   let auth = false;
  if (admin) {
    let adminAuth = true;
    if (adminAuth) {
      return adminAuth ? <Outlet /> : <Navigate to="/login" />;
    } else {
      let userAuth = true;
      return userAuth ? (
        <>
          <UserChatComponent /> <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      );
    }
  }
};

export default ProtectedRoutesComponent;
