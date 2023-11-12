import React from "react";
import "./LatestNews.css";
import LatestNewsList from "../LatestNewsList/LatestNewsList";
import YoutubeVideoContainer from "../YouTubeVideoContainer/YoutubeVideoContainer";

const LatestNews = () => {
  return (
    <div className="latest-news">
      <div className="news-container">
        <h1>Latest News</h1>
      </div>
      <div className="content-columns" >
        <div className="news-component">
          <LatestNewsList />
        </div>
        <div className="youtube-video-container">
          <YoutubeVideoContainer />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
