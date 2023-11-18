import React from "react";
import "./StoriesCard.css";
import { Link } from "react-router-dom";

const truncateDescription = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

const StoriesCard = ({ story }) => {
  const { img, title, desc, id } = story;

  const truncatedDesc = truncateDescription(desc, 1000);

  return (
    <div className="stories-box">
      <Link to={`/post/${id}`}>
        <div className="image-container">
          <img src={img} alt={title} className="story-image" />
        </div>
        <div className="text-container">
          <h3 className="header">{title}</h3>
          <p className="text">{truncatedDesc}</p>
        </div>
      </Link>
    </div>
  );
};

export default StoriesCard;
