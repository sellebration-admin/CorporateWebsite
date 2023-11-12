import React from "react";
import "./YouTubeVideoContainer.css";
const YoutubeVideoContainer = () => {
  return (
    <div className="youtube-video-container">
      <div className="big-rectangle">
        <div className="video-container">
          <iframe
            width="663"
            height="375"
            src="https://www.youtube.com/embed/sMqtwbKc8EA?si=DU8ZzENJLLd6DGCD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="bottom-container">
          <button className="view-all-button" onClick={() => setActiveTab(0)}>
            View More Videos
          </button>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoContainer;
