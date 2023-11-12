import React from "react";
import "./StoriesCard.css";

const StoriesCard = ({ story }) => {
  const { image, header, text, link } = story;

  return (
    <div className="box">
      <div className="image-container">
        <img src={image} alt={header} className="story-image" />
      </div>
      <div className="text-container">
        <h3 className="header">{header}</h3>
        <a href={link}>
          <p className="text">{text.slice(0, 1500)}</p>
        </a>
      </div>
    </div>
  );
};

export default StoriesCard;
