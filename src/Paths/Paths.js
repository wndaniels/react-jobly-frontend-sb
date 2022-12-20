import {
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../Home/Home";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignupForm";
import ProfileForm from "../Profile/ProfileForm";
import CompanyList from "../Company/CompanyList";
import CompanyDetails from "../Company/CompanyDetails";
import JobsList from "../Job/JobList";
import Main from "../Main";
import PrivatePaths from "./PrivatePaths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Main />}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/signup" element={<SignUpForm />} />
      <Route element={<PrivatePaths />}>
        <Route exact path="/profile" element={<ProfileForm />} />
        <Route exact path="/companies" element={<CompanyList />} />
        <Route exact path="/companies/:handle" element={<CompanyDetails />} />
        <Route exact path="/jobs" element={<JobsList />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </Route>
  )
);

const Paths = () => {
  return <RouterProvider router={router} />;
};

export default Paths;
