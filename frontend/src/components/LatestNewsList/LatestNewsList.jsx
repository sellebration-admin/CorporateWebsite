import React from "react";
import news from "../../data/news.json";
import LatestNewsItem from "../LatestNewsItem/LatestNewsItem";
import "./LatestNewsList.css";
const LatestNewsList = () => {
  const maxItemsToShow = 3;

  return (
    <div className="latest-news-list">
      {news.slice(0, maxItemsToShow).map((item, index) => (
        <LatestNewsItem news={item} key={index} />
      ))}
      {news.length > maxItemsToShow && (
        <button
          className="news-view-all-button"
          onClick={() => setActiveTab(0)}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default LatestNewsList;
