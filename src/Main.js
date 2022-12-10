import { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";
import UserContext from "./Auth/UserContext";

export const TOKEN_STORAGE_ID = "jobly-token";

const Main = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [appId, setAppId] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            setAppId(new Set(currentUser.applications));
          } catch (e) {
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  function appliedToJob(id) {
    return appId.has(id);
  }

  function applyToJob(id) {
    if (appliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setAppId(new Set([...appId, id]));
  }

  if (!infoLoaded) return;

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        appliedToJob,
        applyToJob,
        login,
        logout,
        signup,
      }}
    >
      <NavBar />
      <Outlet />
    </UserContext.Provider>
  );
};

export default Main;
