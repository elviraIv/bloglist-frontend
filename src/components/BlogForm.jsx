import React, { useState } from "react";

const BlogForm = ({ createBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: "", author: "", url: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleCreateBlog = (event) => {
    event.preventDefault();
    createBlog(newBlog.title, newBlog.author, newBlog.url);
    setNewBlog({ title: "", author: "", url: "" });
  };
  return (
    <div>
      <h1>create new blog </h1>
      <form onSubmit={handleCreateBlog}>
        <div>
          title: 
          <input
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          author: 
          <input
            type="text"
            name="author"
            value={newBlog.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          url: 
          <input
            type="text"
            name="url"
            value={newBlog.url}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default BlogForm;
