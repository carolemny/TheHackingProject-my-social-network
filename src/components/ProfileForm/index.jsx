import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux";

const ProfileForm = ({ dataUsername, dataDescription }) => {
  const auth = useSelector((state) => state.auth);
  const { TextArea } = Input;
  const [userName, setUserName] = useState(dataUsername);
  const [description, setDescription] = useState(dataDescription);
  const dispatch = useDispatch();

  const onChangeUsername = ({ target: { value } }) => {
    setUserName(value);
  };

  const onChangeDescription = ({ target: { value } }) => {
    setDescription(value);
  };

  const UpdateUser = () => {
    const data = {
      description: description,
      username: userName,
    };

    fetch("http://localhost:1337/users/me", {
      method: "put",
      headers: {
        Authorization: `Bearer ${auth.userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        /* console.log(response); */
        dispatch(updateUser());
      });
  };

  return (
    <div className="ProfileForm">
      <h1>Modifier mon profil</h1>
      <Form name="basic" onFinish={UpdateUser}>
        <Form.Item name="username">
          <Input
            placeholder="Nom d'utilisateur"
            onChange={onChangeUsername}
            value={userName}
          />
        </Form.Item>
        <TextArea
          value={description}
          onChange={onChangeDescription}
          placeholder="Décrivez-vous en quelques mots..."
          autoSize={{ minRows: 5, maxRows: 10 }}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
