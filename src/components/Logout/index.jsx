import React from "react";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import { logoutUser } from "../../redux";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logoutUser());
  Cookies.remove("token");
  Cookies.remove("userId");
  return (
    <div className="logout">
      <Redirect to="/" />
    </div>
  );
};

export default Logout;
