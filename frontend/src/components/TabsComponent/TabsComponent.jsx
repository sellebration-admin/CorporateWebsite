import React, { useState } from "react";
import "./TabsComponent.css";
import StoriesCardList from "../StoriesCardList/StoriesCardList";

const TabsComponent = () => {
  const tabs = [
    { label: "Recommended", content: <StoriesCardList activeTab={0} /> },
    { label: "Leadership", content: <StoriesCardList activeTab={1} /> },
    { label: "CSR", content: <StoriesCardList activeTab={2} /> },
    { label: "Sustainability", content: <StoriesCardList activeTab={3} /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "active" : ""}
          >
            {tab.label}
          </button>
        ))}
        <div className="view-all-button-div">
          <button className="view-all-button" onClick={() => setActiveTab(0)}>
            View All
          </button>
        </div>
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
