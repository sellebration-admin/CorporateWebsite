import React, { useState } from "react";
import "./AllPostsModule.css";
import { Link } from "react-router-dom";

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    title: "Sample Story 1",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    date: "2023-11-01",
    tag: "News",
  },
  {
    id: 2,
    title: "Sample Story 2",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
    date: "2023-11-02",
    tag: "Story",
  },
  {
    id: 3,
    title: "Sample Story 3",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: "2023-11-03",
    tag: "News",
  },
  {
    id: 4,
    title: "Sample Story 4",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    date: "2023-11-04",
    tag: "Story",
  },
  {
    id: 5,
    title: "Sample Story 5",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "2023-11-05",
    tag: "Story",
  },
  {
    id: 6,
    title: "Sample Story 6",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    date: "2023-11-06",
    tag: "Story",
  },
  {
    id: 7,
    title: "Sample Story 7",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
    date: "2023-11-07",
    tag: "Story",
  },
  {
    id: 8,
    title: "Sample Story 8",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt...",
    date: "2023-11-08",
    tag: "Story",
  },
  {
    id: 9,
    title: "Sample Story 9",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet...",
    date: "2023-11-09",
    tag: "Story",
  },
  {
    id: 10,
    title: "Sample Story 10",
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg",
    content:
      "Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat...",
    date: "2023-11-10",
    tag: "Story",
  },
];

const PAGE_SIZE = 4;

const AllPostsModule = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * PAGE_SIZE;
  const indexOfFirstPost = indexOfLastPost - PAGE_SIZE;
  const currentPosts = mockPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="posts-module-div">
      <div className="all-posts-container">

      <div className="breadcrumbs">
        <Link to="/index">Home</Link> / <Link to="/blog">Blog</Link>
      </div>
        {currentPosts.map((post) => (
          <div key={post.id} className="post-item">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="post-thumbnail"
            />
            <div className="post-details">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.content.slice(0, 200)}...</p>
              <div className="post-info">
                <span className="post-date">{post.date}</span>
                <span
                  className={
                    post.tag === "News" ? "post-tag news-tag" : "post-tag"
                  }
                >
                  {post.tag}
                </span>
              </div>
              <button className="read-button">Read</button>
            </div>
          </div>
        ))}

        <div className="pagination">
          {Array(Math.ceil(mockPosts.length / PAGE_SIZE))
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
