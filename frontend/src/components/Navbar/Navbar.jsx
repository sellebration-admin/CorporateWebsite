import React from "react";
import "./Navbar.css";
import { sortIcon, logo } from "./../../assets/index";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-column">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="right-column">
          <div className="sort-icon">
            <img src={sortIcon} alt="sort" />
          </div>
          <div className="search-box">
            <input type="text" className="search-input" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
