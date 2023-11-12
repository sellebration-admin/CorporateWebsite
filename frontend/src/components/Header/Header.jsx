import React from "react";
import "./Header.css";
import { sortIcon, logo, search } from "./../../assets/index";
import LanguagesMap from "../LanguagesMap/LanguagesMap";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <div className="left-column">
            <div className="logo">
              <img src={logo} alt="logo" className="logo-image" />
            </div>
          </div>
          <div className="right-column">
            <img src={sortIcon} alt="sort" className="sort-logo" />
            <form>
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
              <button type="submit">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <LanguagesMap />
    </header>
  );
};

export default Header;
