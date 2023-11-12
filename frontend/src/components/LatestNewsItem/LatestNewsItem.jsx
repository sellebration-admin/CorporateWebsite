import React from "react";
import "./LatestNewsItem.css";
const LatestNewsItem = ({ news }) => {
  const { title, text, link } = news;
  return (
    <div className="latest-news-item">
      <div className="latest-news-container">
        <div className="news-title">
          <h3>{title}</h3>
        </div>
        <div className="news-text">
          <a href={link}>
            <p>{text}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsItem;
