import { NavLink, useRouteError } from "react-router-dom";
import React from "react";

const ErrorPage = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button className="terramap-button">Go to TerraMap</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;