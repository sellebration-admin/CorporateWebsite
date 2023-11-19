import React, { useState } from "react";
import "./EditableElement.css";
import axios from "axios";

const EditableElement = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedPost = { title, desc };
      await axios.put(
        `http://3.110.51.174:8800/api/posts/${post.id}`,
        updatedPost
      );
      setIsEditing(false);
    } catch (error) {
      console.log("Error updating post:", error);
    }
  };
  return (
    <div className="editable-element">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div onClick={handleEdit}>
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="post-info">
            <img src={post.img} alt="Post" className="post-image" />
            <div className="post-details">
              <p className="category">{post.cat}</p>
              <p className="subcategory">{post.subcat}</p>
              <p className="date">{post.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditableElement;
