import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import RegisterForm from "./RegisterForm";
import { fetchUserSuccess } from "../../redux";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    fetchRegister(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const fetchRegister = (values) => {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    fetch("http://localhost:1337/auth/local/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        /* console.log(response); */
        dispatch(fetchUserSuccess(response));
        Cookies.set("token", response.jwt);
        Cookies.set("userId", response.user.id);
        history.push("/");
      });
  };

  return (
    <div className="Register">
      <RegisterForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};

export default Register;
