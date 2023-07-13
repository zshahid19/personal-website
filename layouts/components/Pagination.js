import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  // Check if posts array is defined
  if (!posts) {
    return null; // or return a loading state, error message, etc.
  }

  const recentPosts = posts.slice(0, 6); // Select the 6 most recent posts

  return (
    <div>
      {recentPosts.map((post) => (
        <div key={post.id} className="post">
          {/* Render post content */}
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Add any additional fields you want to display */}
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default PostList;
