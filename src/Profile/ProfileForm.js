import { useState, useContext } from "react";
import UserContext from "../Auth/UserContext";
import JoblyApi from "../api/api";
import { Form } from "react-router-dom";
import Alert from "../Common/Alert";

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
  });

  const [formError, setFormError] = useState([]);
  const [savedEdit, setSavedEdit] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };

    let username = formData.username;
    let updateUser;

    try {
      updateUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      setFormError(errors);
      return;
    }

    setFormData((f) => ({ ...f }));
    setFormError([]);
    setSavedEdit(true);

    setCurrentUser(updateUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
    setFormError([]);
  }

  return (
    <div>
      <h1>Profile Form</h1>
      <div>
        <div>
          <Form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <p>{formData.username}</p>
            </div>
            <div>
              <label>First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {formError.length ? (
              <Alert type="danger" messages={formError} />
            ) : null}

            {savedEdit ? (
              <Alert type="success" messages={["Updated successfully."]} />
            ) : null}

            <button onClick={handleSubmit}>Save Changes</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
