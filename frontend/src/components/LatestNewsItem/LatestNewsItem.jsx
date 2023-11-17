import React from "react";
import { Link } from "react-router-dom";
import "./LatestNewsItem.css";

const LatestNewsItem = ({ news }) => {
  const { title, date, id } = news;

  return (
    <div className="latest-news-item">
      <div className="latest-news-container">
        <Link to={`/post/${id}`} className="news-link">
          <div className="news-title">
            <h3>{title}</h3>
          </div>
          <div className="news-text">
            <span className="post-date">
              {new Date(date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestNewsItem;
