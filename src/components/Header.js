import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Header</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create
    </NavLink>
  </header>
);

export default Header;
