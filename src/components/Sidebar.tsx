import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/">One</NavLink>
      <NavLink to="/two">Two</NavLink>
      <NavLink to="/three">Three</NavLink>
      <NavLink to="/four">Four</NavLink>
    </div>
  );
};

export default Sidebar;
