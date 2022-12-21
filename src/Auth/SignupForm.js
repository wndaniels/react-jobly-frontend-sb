import Alert from "../Common/Alert";
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
    <div className="SignupForm">
      <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 className="mb-3">Sign Up</h1>
        <div className="card">
          <div className="card-body">
            <Form method="post" onSubmit={handleSubmit}>
              <div className="d-grid gap-3">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {formErr.length ? (
                <Alert type="danger" messages={formErr} />
              ) : null}

              <button className="btn btn-sm btn-primary">Sign Up</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
