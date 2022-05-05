import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>Music Hub</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/discovery">Discovery</NavLink>
      </nav>
    </>
  );
};

export default Header;
