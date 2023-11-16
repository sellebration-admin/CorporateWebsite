import React from "react";
import "./SocialMedia.css";
import SocialMediaCardForTwitter from "../SocialMediaCard/SocialMediaCardForTwitter";
import SocialMediaCardForLinkedIn from "../SocialMediaCard/SocialMediaCardForLinkedIn";

const SocialMedia = () => {
  return (
    <div className="social-media-news">
      <div className="social-media-flexbox">
        <div className="social-content-columns">
          <div className="column-one">
            <SocialMediaCardForTwitter />
          </div>
          <div className="column-two">
            <SocialMediaCardForLinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
