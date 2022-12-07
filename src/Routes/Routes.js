import { Route, Routes } from "react-router-dom";

const Routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<LoginForm />} />
      <Route exact path="/signup" element={<SignUpForm />} />
      <Route exact path="/profile" element={<ProfileForm />} />
      <Route exact path="/companies" element={<CompanyList />} />
      <Route exact path="/companies/:handle" element={<CompanyDetails />} />
      <Route exact path="/jobs" element={<JobsList />} />
    </Routes>
  );
};

export default Routes;
