import React from "react";
import StoriesCard from "../StoriesCard/StoriesCard";
import data from "../../data/stories.json";

const StoriesCardList = ({ activeTab }) => {
  const tabs = [
    { label: "Recommended" },
    { label: "Leadership" },
    { label: "CSR" },
    { label: "Sustainability" },
  ];

  const filteredStories =
    activeTab === 0
      ? data
      : data.filter((story) => story.tag === tabs[activeTab].label);

  return (
    <div>
      {filteredStories.slice(0, 3).map((story, index) => (
        <StoriesCard key={index} story={story} />
      ))}
    </div>
  );
};

export default StoriesCardList;
