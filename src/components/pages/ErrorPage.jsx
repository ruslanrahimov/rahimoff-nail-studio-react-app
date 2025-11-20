import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <h1>404 not found</h1>
      <NavLink to="/">Go to Home</NavLink>
    </>
  );
};

export default ErrorPage;
