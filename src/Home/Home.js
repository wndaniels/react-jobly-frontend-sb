import { useContext } from "react";
import UserContext from "../Auth/UserContext";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="Home">
      <div className="container text-center">
        <h1>Jobly</h1>
        <p>All the jobs, in one convenient place!</p>
        {currentUser ? (
          <h2>
            Welcome Back, {currentUser.firstName || currentUser.username}!
          </h2>
        ) : (
          <p>
            <Link className="btn btn-primary " to="/login">
              Login
            </Link>
            <Link className="btn btn-primary ms-3" to="/signup">
              Signup
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
