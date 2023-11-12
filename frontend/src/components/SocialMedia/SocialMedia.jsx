import React from "react";
import "./SocialMedia.css";
import YoutubeVideoContainer from "../YouTubeVideoContainer/YoutubeVideoContainer";
import SocialMediaCard from "../SocialMediaCard/SocialMediaCard";

const SocialMedia = () => {
  return (
    <div className="social-media-news">
      <div className="social-content-columns">
        <SocialMediaCard />
      </div>
    </div>
  );
};

export default SocialMedia;
