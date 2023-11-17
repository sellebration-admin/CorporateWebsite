import React from "react";
import "./StoriesCard.css";
import { Link } from "react-router-dom";

const StoriesCard = ({ story }) => {
  const { img, title, desc, id } = story;

  return (
    <div className="stories-box">
      <Link to={`/post/${id}`}>
        <div className="image-container">
          <img src={img} alt={title} className="story-image" />
        </div>
        <div className="text-container">
          <h3 className="header">{title}</h3>
          <p className="text">{desc.slice(0, 1500)}</p>
        </div>
      </Link>
    </div>
  );
};

export default StoriesCard;
