import React, { useEffect, useState, useContext } from "react";
import "./HeaderNoMenu.css";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

import {
  sortIcon,
  search,
  closeIcon,
  whiteLogo,
  logotwo,
} from "./../../assets/index";
import { MenuContext } from "../../context/menuContext";
const HeaderNoMenu = () => {
  const [active, setActive] = useState(false);
  const { showMenu } = useContext(MenuContext);
  const isActive = () => {
    if (window.scrollY > 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "new-header-showmenu-nm" : "new-header-nm"}>
      <div className="nheader-container">
        <div className="nheeader-logo">
          <Link to="/index">
            <div className="nheader-logo">
              {active ? (
                <img
                  src={whiteLogo}
                  alt="logo"
                  className="nheader-logo-image-white-nm"
                />
              ) : (
                <img
                  src={logotwo}
                  alt="logo"
                  className={"nheader-logo-image-tr-nm"}
                />
              )}
            </div>
          </Link>
        </div>
        <div className="nheader-links">
          <div className="nheader-sort-icon-wrapper">
            <img
              src={sortIcon}
              alt="sort"
              className="nheader-close-icon"
              onClick={() => {
                showMenu();
              }}
            />
          </div>
          <div className="nheader-search-form">
            <form className="nheader-search-form">
              <input
                type="text"
                className="nheader-search-input"
                placeholder="Search"
              />
              <button type="submit">
                <img src={search} alt="search" />
              </button>
            </form>
          </div>
          <div className="nheader-selectdiv">
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
  );
};

export default HeaderNoMenu;
