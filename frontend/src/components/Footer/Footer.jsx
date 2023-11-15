import React from "react";
import "./Footer.css";
import {
  twitterFooter,
  linkedinFooter,
  instagramFooter,
  facebookFooter,
  youtubeFooter,
} from "../../assets/index";

const Footer = () => {
  return (
    <footer>
      <div className="lines">
        <div className="first-line">
          <div className="first-line-links">
            <ul className="first-line-links-list">
              <li>About Us</li>
              <li>Businesses</li>
              <li>Investors</li>
              <li>CSR</li>
              <li>Sustainability</li>
              <li>Innovation </li>
              <li>Media</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
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
        <div className="second-line">
          <p className="second-line-text">
            &copy; 2022 All Rights Reserved, Selebration Pvt. Ltd.
          </p>
        </div>
        <div className="third-line">
          <ul className="third-line-links-list">
            <li>Terms and Conditions</li> <li>Privacy policy</li>
            <li>Site Map</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
