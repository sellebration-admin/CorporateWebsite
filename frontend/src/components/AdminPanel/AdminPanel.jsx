import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import EditableElement from "./EditableElement";

const PAGE_SIZE = 4;

const AdminPanel = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editDesc, setEditDesc] = useState({});
  const [editTitle, setEditTitle] = useState({});
  const [categories] = useState(["News", "Story"]);
  const [subcategories] = useState({
    News: [],
    Story: ["Leadership", "CSR", "Sustainability"],
  });
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/index");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://3.110.51.174:8800/api/posts/");
      if (Array.isArray(res.data)) {
        const sortedPosts = res.data
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        setPosts(sortedPosts);
      } else {
        throw new Error("Data retrieved is not an array");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeleteClick = async (postId) => {
    try {
      await axios.delete(`http://3.110.51.174:8800/api/posts/${postId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const sortedPosts = posts
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="admin-panel">
      <h2>All Posts</h2>
      {currentPosts.map((post) => (
        <div key={post.id}>
          <EditableElement post={post} />
          <button onClick={() => handleDeleteClick(post.id)}>Delete</button>
        </div>
      ))}
      <div className="pagination">
        {Array(Math.ceil(sortedPosts.length / PAGE_SIZE))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className="page-button"
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AdminPanel;
