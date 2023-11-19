import React, { useState, useEffect } from "react";
import "./OurStories.css";
import axios from "axios";
import TabsComponent from "../TabsComponent/TabsComponent";

const OurStories = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://3.110.51.174:8800/api/posts", {
          params: { cat: "stories" },
        });
        if (Array.isArray(res.data)) {
          setPosts(res.data.slice(0, 10));
          throw new Error("Data retrieved is not an array");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="our-stories">
      <div className="stories-container">
        <h1>Our stories</h1>
      </div>
      <div className="tabs-component">
        <TabsComponent posts={posts} />
      </div>
    </div>
  );
};

export default OurStories;
