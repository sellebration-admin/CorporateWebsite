import React, { useEffect, useState } from "react";
import "./LatestNews.css";
import LatestNewsList from "../LatestNewsList/LatestNewsList";
import YoutubeVideoContainer from "../YouTubeVideoContainer/YouTubeVideoContainer";
import axios from "axios";

const LatestNews = () => {
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/posts", {
          params: { cat: "news" },
        });
        if (Array.isArray(res.data)) {
          setNewsPosts(res.data);
        } else {
          throw new Error("Data retrieved is not an array");
        }
      } catch (error) {
        console.error("Error fetching news posts:", error);
      }
    };
    fetchNewsPosts();
  }, []);

  return (
    <div className="latest-news">
      <div className="news-container">
        <h1>Latest News</h1>
      </div>
      <div className="content-columns">
        <div className="news-component">
          <LatestNewsList newsPosts={newsPosts} />
        </div>
        <div className="youtube-video-container">
          <YoutubeVideoContainer />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
