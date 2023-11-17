import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./TabsComponent.css";
import StoriesCardList from "../StoriesCardList/StoriesCardList";

const TabsComponent = ({ posts }) => {
  const tabs = [
    {
      label: "Recommended",
      content: <StoriesCardList activeTab={0} posts={posts} />,
    },
    {
      label: "Leadership",
      content: <StoriesCardList activeTab={1} posts={posts} />,
    },
    { label: "CSR", content: <StoriesCardList activeTab={2} posts={posts} /> },
    {
      label: "Sustainability",
      content: <StoriesCardList activeTab={3} posts={posts} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleViewAll = () => {
    navigate({
      pathname: "/blog",
      search: "?cat=stories",
    });
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
          <button className="view-all-button" onClick={handleViewAll}>
            View All
          </button>
        </div>
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabsComponent;
