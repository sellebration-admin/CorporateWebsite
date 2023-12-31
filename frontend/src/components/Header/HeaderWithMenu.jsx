import React, { useEffect, useState, useContext } from "react";
import "./HeaderWithMenu.css";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import {
  twitterFooter,
  linkedinFooter,
  instagramFooter,
  facebookFooter,
  youtubeFooter,
} from "../../assets/index";
import {
  sortIcon,
  logo,
  search,
  nblogo,
  closeIcon,
  whiteLogo,
  logotwo,
} from "./../../assets/index";
import { MenuContext } from "../../context/menuContext";
const HeaderWithMenu = () => {
  const { showMenu } = useContext(MenuContext);
  return (
    <div className="new-header-showmenu">
      <div className="nheader-container">
        <div className="nheeader-logo">
          <Link to="/index">
            <div className="nheader-logo">
              <img
                src={whiteLogo}
                alt="logo"
                className="nheader-logo-image-white-wm"
              />
            </div>
          </Link>
        </div>
        <div className="nheader-links">
          <div className="nheader-sort-icon-wrapper">
            <img
              src={closeIcon}
              alt="sort"
              className="nheader-sort-logo-wm"
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
      <div className="nheader-menu">
        <div className="nheader-menu-columns">
          <div className="nheader-menu-column">
            <h1>About us</h1>
            <Link to="/">Our Profile</Link>
            <Link to="/">Leadership</Link>
            <Link to="/">Women Leaders</Link>
            <Link to="/">Vision&Values</Link>
          </div>
          <div className="nheader-vertical-line"></div>
          <div className="nheader-menu-column">
            <h1>Businesses & Brands</h1>
            <Link to="/">Our Businesses</Link>
            <Link to="/">Our Brands</Link>
          </div>
          <div className="nheader-vertical-line"></div>
          <div className="nheader-menu-column">
            <h1>CSR</h1>
            <Link to="/register">CSR @ Sellebration</Link>
            <Link to="/login">Creating an Impact</Link>
            <Link to="/">Our Strategy</Link>
            <Link to="/">CSR Policy</Link>
          </div>
          <div className="nheader-vertical-line"></div>
          <div className="nheader-menu-column">
            <h1>Media</h1>
            <Link to="/register">Media Releases</Link>
            <Link to="/login">Media Reports</Link>
            <Link to="/">Our Stories</Link>
            <Link to="/">Events</Link>
            <Link to="/">Downloads</Link>
            <Link to="/">Our Logo</Link>
          </div>
          <div className="nheader-vertical-line"></div>
          <div className="nheader-menu-column">
            <h1>Innovation</h1>
            <div className="nheader-horizontal-line"></div>
            <h1>Investors</h1>
            <div className="nheader-horizontal-line"></div>
            <h1>Careers</h1>
            <div className="nheader-horizontal-line"></div>
            <h1>Contact Us</h1>
            <div className="nheader-horizontal-line"></div>
            <div className="first-line-social-icons">
              <ul>
                <li>
                  <a href="https://twitter.com/SellebrationLtd">
                    <img src={twitterFooter} alt="X (ex Twitter)" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/sellebration-private-limited">
                    <img src={linkedinFooter} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sellebrationltd/">
                    <img src={instagramFooter} alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/SellebrationLtd">
                    <img src={facebookFooter} alt="Facebook" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithMenu;
