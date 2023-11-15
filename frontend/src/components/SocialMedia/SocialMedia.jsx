import React from "react";
import "./SocialMedia.css";
import SocialMediaCardForTwitter from "../SocialMediaCard/SocialMediaCardForTwitter";
import SocialMediaCardForLinkedIn from "../SocialMediaCard/SocialMediaCardForLinkedIn";

const SocialMedia = () => {
  return (
    <div className="social-media-news">
      <div className="social-media-flexbox">
        <div className="social-content-columns">
          <div>
            <SocialMediaCardForTwitter />
          </div>
          <div>
            <SocialMediaCardForLinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
