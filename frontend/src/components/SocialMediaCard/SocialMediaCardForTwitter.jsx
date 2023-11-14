import React from "react";
import "./SocialMediaCardForTwitter.css";
import { twitterIcon } from "../../assets";
const SocialMediaCardForTwitter = () => {
  return (
    <div className="big-container">
      <div className="social-media-icon-container">
        <img src={twitterIcon} alt="Twitter Icon" className="social-icon" />
      </div>
      <div className="social-media-card">
        <div className="social-media-container">
          <div className="social-media-image-container">
            <img
              src="https://bigthink.com/wp-content/uploads/2022/03/AdobeStock_389328016_Editorial_Use_Only.jpeg"
              alt="social media image"
              className="social-media-image"
            />
          </div>
          <div className="social-media-title">Title</div>
          <div className="social-media-text">
            Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text.
            It Has Roots In A Piece Of Classical Latin Literature From 45 BC,
            The Industry's Standard Dummy Text Ever Since The 1500s. Contrary To
            Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots
            In A Piece Of Classical Latin Literature From 45 BC, The Industry's
            Standard Dummy Text Ever Since The 1500s. Contrary To Popular
            Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A
            Piece Of Classical Latin Literature From 45 BC, The Industry's
            Standard Dummy Text Ever Since The 1500s.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCardForTwitter;
