import React, { useState, useEffect } from "react";
import StoriesCard from "../StoriesCard/StoriesCard";
import "./StoriesCardList.css";

const StoriesCardList = ({ activeTab, posts }) => {
  const tabs = [
    { label: "Recommended" },
    { label: "Leadership" },
    { label: "CSR" },
    { label: "Sustainability" },
  ];

  const [numCards, setNumCards] = useState(3);

  const updateCardsForScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 415) {
      setNumCards(1);
    } else {
      setNumCards(3);
    }
  };

  useEffect(() => {
    updateCardsForScreenSize();
    window.addEventListener("resize", updateCardsForScreenSize);
    return () => {
      window.removeEventListener("resize", updateCardsForScreenSize);
    };
  }, []);

  const filteredStories =
    activeTab === 0
      ? posts
      : posts.filter((story) => story.subcat === tabs[activeTab].label);

  return (
    <div className="cards-list">
      {filteredStories.slice(0, numCards).map((story, index) => (
        <StoriesCard key={index} story={story} />
      ))}
    </div>
  );
};

export default StoriesCardList;
