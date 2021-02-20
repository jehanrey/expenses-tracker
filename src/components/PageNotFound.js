import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <p>404 - {location.pathname} is not a valid page.</p>
    <Link to="/">Home</Link>
  </div>
);

export default PageNotFound;
