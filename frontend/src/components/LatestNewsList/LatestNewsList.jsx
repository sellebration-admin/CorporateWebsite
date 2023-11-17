import React, { useState } from "react";
import LatestNewsItem from "../LatestNewsItem/LatestNewsItem";
import "./LatestNewsList.css";
import { useNavigate } from "react-router-dom";

const LatestNewsList = ({ newsPosts }) => {
  const maxItemsToShow = 3;
  const [showAllItems, setShowAllItems] = useState(false);
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate({
      pathname: "/blog",
      search: "?cat=news",
    });
  };

  return (
    <div className="latest-news-list">
      {newsPosts
        .slice(0, showAllItems ? newsPosts.length : maxItemsToShow)
        .map((item, index) => (
          <LatestNewsItem news={item} key={index} />
        ))}

      <button className="news-view-all-button" onClick={handleViewAll}>
        View All
      </button>
    </div>
  );
};

export default LatestNewsList;
