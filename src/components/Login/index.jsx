import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { fetchUser, fetchUserSuccess, fetchUserFailed } from "../../redux";
import LoginForm from "./LoginForm";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values) => {
    fetchLoginUser(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const fetchLoginUser = (values) => {
    const data = {
      identifier: values.username,
      password: values.password,
    };

    dispatch(fetchUser());

    fetch("http://localhost:1337/auth/local", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode === 400) {
          dispatch(fetchUserFailed(response.message[0].messages[0].message));
          console.log(
            `LoginFailed: ${response.message[0].messages[0].message}`
          );
        } else {
          dispatch(fetchUserSuccess(response));
          /* console.log("LoginSuccess"); */
          Cookies.set("token", response.jwt);
          Cookies.set("userId", response.user.id)
          history.push("/");
        }
      });
  };

  return (
    <div className="Login">
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};

export default Login;
