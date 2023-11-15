import React from "react";
import "./SinglePostModule.css";
import RelatedPostsWidget from "../RelatedPostsWidget/RelatedPostsWidget";
import { Link } from "react-router-dom";

const SinglePostModule = () => {
  const postData = {
    title: "Sample Post Title",
    date: "23.04.2022",
    content: `
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget ante id mauris bibendum imperdiet.</h3>
      <img src="https://people.socsci.tau.ac.il/mu/snsnews/files/2016/11/blog6.jpg" alt="Second Image" />
      <p>Nulla vel eros libero. Etiam ac ligula sit amet urna malesuada finibus.</p>
      <p>Phasellus rhoncus, ipsum a consequat fermentum, lorem justo ultrices odio, quis commodo arcu nunc at mauris.</p>
      <img src="https://people.socsci.tau.ac.il/mu/snsnews/files/2016/11/blog6.jpg" alt="Third Image" />
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    `,
  };

  return (
    <div className="single-post">
      <div className="breadcrumbs">
        <Link to="/index">Home</Link> / <Link to="/blog">Blog</Link> /{" "}
        {postData.title}
        Title
      </div>
      <h1 className="post-title">{postData.title}</h1>
      <div className="post-header">
        <p className="post-date">{postData.date}</p>
        <button className="share-button">Share</button>
      </div>
      <div className="breaking-line"></div>
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
      </div>
      <RelatedPostsWidget />
    </div>
  );
};

export default SinglePostModule;
