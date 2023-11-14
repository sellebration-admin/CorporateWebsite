import React from "react";
import "./Header.css";
import { sortIcon, logo, search } from "./../../assets/index";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <div className="left-column">
            <Link to="/index">
              <div className="logo">
                <img src={logo} alt="logo" className="logo-image" />
              </div>
            </Link>
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
            <div className="selectdiv">
              <select>
                <option value="English" selected>
                  English
                </option>
                <option value="हिन्दी">हिन्दी</option>
                <option value="deutsch">Deutsch</option>
                <option value="français">Français</option>
                <option value="русский">Русский</option>
                <option value="Português">Português</option>
                <option value="中国人">中国人</option>
                <option value="español">Español</option>
                <option value="日本">日本</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
