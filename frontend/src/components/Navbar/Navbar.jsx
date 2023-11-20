import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Navbar.css";
import {
  twitterFooter,
  linkedinFooter,
  instagramFooter,
  facebookFooter,
  youtubeFooter,
} from "../../assets/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("Clicked");
  };

  return (
    <div className="menu-wrapper">
      <div className={`menu ${showMenu ? "show-menu" : ""}`}>
        <div className="menu-columns">
          <div className="menu-column">
            <h1>About us</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/">Our Profile</Link>
            <Link to="/">Leadership</Link>
            <Link to="/">Women Leaders</Link>
            <Link to="/">Vision&Values</Link>
            <Link to="/">Milestones</Link>
          </div>
          <div className="vertical-line"></div>
          <div className="menu-column">
            <h1>Businesses & Brands</h1>
            <div className="horizontal-line"></div>
            <Link to="/blog">Blog</Link>
            {currentUser && (
              <div className="visible-to-logged-in">
                <Link to="/addpost">Add a post</Link>
                <Link to="/admin">Admin panel</Link>

                <Link onClick={logout} to="/index">
                  Logout
                </Link>
              </div>
            )}
            <h1>Sustainability</h1>
          </div>
          <div className="vertical-line"></div>
          <div className="menu-column">
            <h1>CSR</h1>
            <Link to="/register">CSR At Sellebration</Link>
            <Link to="/login">Bringing The Change</Link>
            <Link to="/">Our Strategy</Link>
            <Link to="/">Stories of Hope</Link>
            <Link to="/">CSR Policy</Link>
          </div>
          <div className="vertical-line"></div>
          <div className="menu-column">
            <h1>Media</h1>
            <Link to="/register">Media Releases</Link>
            <Link to="/login">Media Reports</Link>
            <Link to="/">Stories</Link>
            <Link to="/">Events</Link>
            <Link to="/">Downloads</Link>
            <Link to="/">Our Logo</Link>
          </div>
          <div className="vertical-line"></div>
          <div className="menu-column">
            <h1>Innovation</h1>
            <div className="horizontal-line"></div>
            <h1>Investors</h1>
            <div className="horizontal-line"></div>
            <h1>Careers</h1>
            <div className="horizontal-line"></div>
            <h1>Contact Us</h1>
            <div className="horizontal-line"></div>
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

export default Navbar;
