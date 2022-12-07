import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar from "./NavBar/NavBar";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";
import "./App.css";

export const TOKEN_STORAGE_ID = "jobly-token";

const App = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [appId, setAppId] = useState(new Set([]));
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(
    function loadUserInfo() {
      async function getCurrUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            JoblyApi.token = token;
            let currUser = await JoblyApi.getCurrUser(username);
            setCurrUser(currUser);
            setAppId(new Set(currUser.applications));
          } catch (e) {
            setCurrUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrUser();
    },
    [token]
  );

  return (
    <div className="App">
      <NavBar />
    </div>
  );
};

export default App;
