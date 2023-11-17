import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";

const RichTextEditor = ({ placeholder }) => {
  const [content, setContent] = useState({
    text: "",
    tag: "",
    category: "",
  });

  const handleContentChange = (value) => {
    setContent({ ...content, text: value });
  };

  const handleTagChange = (e) => {
    setContent({ ...content, tag: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setContent({ ...content, category: e.target.value });
  };

  const handleAddPost = () => {
    window.console.log("Post Content:", content);
  };

  const tagOptions = ["News", "Story"];
  const storyCategories = ["Leadership", "CSR", "Sustainability"];

  return (
    <div className="editor-container">
      <h2>Add new post</h2>
      <div className="tag-selector">
        <label htmlFor="tag">
          Select Category:<b className="red-star">*</b>
        </label>
        <select
          id="tag"
          value={content.tag}
          onChange={handleTagChange}
          required
        >
          {tagOptions.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {content.tag === "Story" && (
          <div className="category-selector">
            <label htmlFor="category">
              Select Sbucategory:<b className="red-star">*</b>
            </label>
            <select
              id="category"
              value={content.category}
              onChange={handleCategoryChange}
              required
            >
              {storyCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <ReactQuill
        theme="snow"
        value={content.text}
        onChange={handleContentChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link"],
            ["clean"],
          ],
        }}
        formats={[
          "header",
          "font",
          "size",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
        ]}
        placeholder={placeholder || "Write something amazing..."}
      />
      <div className="post-buttons">
        <button className="add-post-button" onClick={handleAddPost}>
          Upload image<b className="red-star">*</b>
        </button>

        <button className="add-post-button" onClick={handleAddPost} disabled>
          Add Post
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
