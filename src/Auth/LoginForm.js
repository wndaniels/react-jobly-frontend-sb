import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import UserContext from "./UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErr, setFormErr] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let res = await login(formData);
    if (res.success) {
      navigate("/");
    } else {
      setFormErr(res.errors);
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button>Login</button>
      </Form>
    </div>
  );
};

export default LoginForm;
