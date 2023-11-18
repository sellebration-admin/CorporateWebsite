import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./RichTextEditor.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const RichTextEditor = ({ placeholder }) => {
  const { currentUser } = useContext(AuthContext);
  const [content, setContent] = useState({
    title: "",
    desc: "",
    img: "",
    cat: "News",
    subcat: "",
    date: Date.now().toString(),
    user_id: currentUser.id,
  });

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(true);

  const handleUploadImage = async () => {
    try {
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", selectedFile);

      console.log("FormData:", formData);

      const response = await axios.post(
        "http://localhost:8800/api/files/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const imageUrl = response.data.imageUrl;
        setContent({ ...content, img: imageUrl });
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    const { title, desc, img, cat, subcat, date, user_id } = content;
    const allFieldsFilled = title && desc && img && cat && date && user_id;
    setIsAllFieldsFilled(!allFieldsFilled);
  }, [content]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("Selected File:", file);
  };

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setContent({ ...content, title: value });
  };

  const handleContentChange = (value) => {
    setContent({ ...content, desc: value });
  };

  const handleCatChange = (e) => {
    setContent({ ...content, cat: e.target.value });
  };

  const handleSubCategoryChange = (e) => {
    setContent({ ...content, subcat: e.target.value });
  };

  const handleAddPost = async () => {
    const { title, desc, img, cat, subcat, date, user_id } = content;
    if (title && desc && img && cat && date && user_id) {
      setIsAllFieldsFilled(!isAllFieldsFilled);
      try {
        const response = await axios.post(
          "http://localhost:8800/api/posts/",
          content
        );
        if (response.status === 200) {
          alert("Post added successfully");
          setContent({
            title: "",
            desc: "",
            img: "",
            cat: "News",
            subcat: "",
            date: Date.now().toString(),
            user_id: currentUser.id,
          });
          setIsAllFieldsFilled(true);
          navigate(`/post/${response.data}`);
        }
      } catch (error) {
        alert("Error! Try again.");
      }
    } else {
      alert(`Please fill in all required fields.`);
    }
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
          value={content.cat}
          onChange={handleCatChange}
          required
        >
          {tagOptions.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {content.cat === "Story" && (
          <div className="category-selector">
            <label htmlFor="category">
              Select Sbucategory:<b className="red-star">*</b>
            </label>
            <select
              id="category"
              value={content.subcat}
              onChange={handleSubCategoryChange}
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

        <div className="title-input">
          <label htmlFor="title">
            Title:<b className="red-star">*</b>
          </label>
          <input
            id="title"
            type="text"
            value={content.title}
            onChange={handleTitleChange}
            required
          />
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={content.desc}
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
        <div className="file-upload">
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button
            className="upload-image-button"
            onClick={handleUploadImage}
            disabled={!selectedFile}
          >
            Upload Image
          </button>
        </div>

        <button
          className="add-post-button"
          onClick={handleAddPost}
          disabled={isAllFieldsFilled}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
