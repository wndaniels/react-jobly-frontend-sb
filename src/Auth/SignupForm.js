import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-router-dom";
import UserContext from "./UserContext";

const SignUpForm = () => {
  const { signup } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErr, setFormErr] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      navigate("/");
    } else {
      setFormErr(result.errors);
    }
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((l) => ({ ...l, [name]: value }));
  };

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <Form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <button>Sign Up</button>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
