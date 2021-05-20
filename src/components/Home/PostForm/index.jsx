import { Input, Form, Button } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPostSuccess } from "../../../redux/posts/postsActions";

const PostForm = () => {
  const auth = useSelector((state) => state.auth);
  const { TextArea } = Input;
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChange = ({ target: { value } }) => {
    setInput(value);
  };

  const publishPost = () => {
    const data = {
      text: input,
      user: auth.userId,
    };

    if (data.text) {
      fetch(" http://localhost:1337/posts", {
        method: "post",
        headers: {
          Authorization: `Bearer ${auth.userToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          dispatch(createPostSuccess(response));
          setInput("");
        });
    }
  };

  return (
    <div className="PostForm">
      <Form>
        <TextArea
          value={input}
          onChange={onChange}
          placeholder="Votre message..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        <Button onClick={publishPost}>Publier</Button>
      </Form>
    </div>
  );
};

export default PostForm;
