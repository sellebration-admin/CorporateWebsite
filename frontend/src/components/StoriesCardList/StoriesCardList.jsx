import React, { useState, useEffect } from "react";
import StoriesCard from "../StoriesCard/StoriesCard";
import data from "../../data/stories.json";
import "./StoriesCardList.css";

const StoriesCardList = ({ activeTab }) => {
  const tabs = [
    { label: "Recommended" },
    { label: "Leadership" },
    { label: "CSR" },
    { label: "Sustainability" },
  ];

  const [numCards, setNumCards] = useState(3); // State to store the number of cards

  const updateCardsForScreenSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 415) {
      setNumCards(1); // If screen width is 415px or less, display 1 card
    } else {
      setNumCards(3); // For other screen sizes, display 3 cards
    }
  };

  useEffect(() => {
    updateCardsForScreenSize(); // Initial check for screen size
    window.addEventListener("resize", updateCardsForScreenSize); // Listen for resize events

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardsForScreenSize);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const filteredStories =
    activeTab === 0
      ? data
      : data.filter((story) => story.tag === tabs[activeTab].label);

  return (
    <div className="cards-list">
      {filteredStories.slice(0, numCards).map((story, index) => (
        <StoriesCard key={index} story={story} />
      ))}
    </div>
  );
};

export default StoriesCardList;
