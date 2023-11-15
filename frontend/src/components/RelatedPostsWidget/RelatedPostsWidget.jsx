import React from "react";
import "./RelatedPostsWidget.css"; 

const RelatedPostsWidget = () => {

  const relatedPosts = [
    {
      title: "Post 1 Title",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Post 2 Title",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Post 3 Title",
      image: "https://via.placeholder.com/150",
    },

  ];

  return (
    <div className="related-posts-widget">
      <h3>Other Posts You Might Like</h3>
      {relatedPosts.map((post, index) => (
        <div className="related-post" key={index}>
          <img src={post.image} alt={`Post ${index + 1}`} />
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RelatedPostsWidget;
