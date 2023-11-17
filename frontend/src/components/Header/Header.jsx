import React, { useContext, useState } from "react";
import "./Header.css";
import { sortIcon, logo, search } from "./../../assets/index";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("Clickedf");
  };

  return (
    <header>
      <div className="wrapper">
        <div className="container">
          <div className="left-column">
            <Link to="/index">
              <div className="header-logo">
                <img src={logo} alt="logo" className="logo-image" />
              </div>
            </Link>
          </div>
          <div className="right-column">
            <div onClick={toggleMenu} className="sort-icon-wrapper">
              <img src={sortIcon} alt="sort" className="sort-logo" />
            </div>
            <form className="search-form">
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
        <div className={`menu ${showMenu ? "show-menu" : ""}`}>
          <div className="menu-columns">
            <div className="menu-column">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>

            <div className="menu-column">
              <Link to="/blog">Blog</Link>
              {currentUser && (
                <div className="visible-to-logged-in">
                  <Link to="/addpost">Add a post</Link>
                  <Link onClick={logout} to="/index">
                    Logout
                  </Link>
                </div>
              )}
            </div>

            <div className="menu-column">
              <Link onClick={toggleMenu}>Exit</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
