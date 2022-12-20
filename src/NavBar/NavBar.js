import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Auth/UserContext";

const NavBar = () => {
  const { currentUser, logout } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  const loggedInUser = () => {
    return (
      <ul>
        <li>
          <NavLink to="/companies">Companies</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={logout}>
            Logout
          </NavLink>
        </li>
      </ul>
    );
  };

  const loggedOutUser = () => {
    return (
      <ul>
        <li></li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
      </ul>
    );
  };

  return (
    <nav>
      <Link to="/">Jobly</Link>
      {currentUser ? loggedInUser() : loggedOutUser()}
    </nav>
  );
};

export default NavBar;
