import React from "react";
import { Form, Input, Button } from "antd";

const LoginForm = (props) => {
  return (
    <div className="LoginForm ">
      <Form
        name="basic"
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Nom d'utilisateur ou adresse e-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 6,
              message: "Your password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password  placeholder="Mot de passe"/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
