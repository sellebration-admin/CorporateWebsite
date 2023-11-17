import React, { useEffect, useState } from "react";
import "./AllPostsModule.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const PAGE_SIZE = 4;

const AllPostsModule = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cat = queryParams.get("cat");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8800/api/posts/";
        if (cat) {
          url += `?cat=${cat}`;
        }
        const res = await axios.get(url);
        if (Array.isArray(res.data)) {
          setPosts(res.data);
        } else {
          throw new Error("Data retrieved is not an array");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [cat]);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const handleReadClick = (postId) => {
    navigate({
      pathname: `/post/${postId}`,
    });
  };
  return (
    <div className="posts-module-div">
      <div className="all-posts-container">
        <div className="breadcrumbs">Home / Blog</div>
        {currentPosts.map((post) => (
          <div key={post.id} className="post-item">
            <img src={post.img} alt={post.title} className="post-thumbnail" />
            <div className="post-details">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.desc.slice(0, 200)}...</p>
              {post.cat === "stories" && <p>{post.subcat}</p>}
              <div className="post-info">
                <span className="post-date">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
                <span
                  className={
                    post.cat === "news" ? "post-tag news-tag" : "post-tag"
                  }
                >
                  {post.cat}
                </span>
              </div>
              <button
                className="read-button"
                onClick={() => handleReadClick(post.id)}
              >
                Read
              </button>
            </div>
          </div>
        ))}

        <div className="pagination">
          {Array(Math.ceil(posts.length / PAGE_SIZE))
            .fill()
            .map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className="page-button"
              >
                {index + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllPostsModule;
