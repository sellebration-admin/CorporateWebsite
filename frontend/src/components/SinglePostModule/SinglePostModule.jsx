import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SinglePostModule.css";

const SinglePostModule = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://3.110.51.174:8800/api/posts/${id}`
        );
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div className="single-post">
      <div className="breadcrumbs">
        <Link to="/index">Home</Link> / <Link to="/blog">Blog</Link>
      </div>
      <h1 className="post-title">{postData.title}</h1>
      <div className="post-content">
        <img src={postData.img} alt={postData.title} />
      </div>
      <div className="post-header">
        <span className="post-date">
          {new Date(postData.date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        <button className="share-button">Share</button>
      </div>
      <div className="breaking-line"></div>
      <div className="post-content">
        <div dangerouslySetInnerHTML={{ __html: postData.desc }}></div>
      </div>
    </div>
  );
};

export default SinglePostModule;
