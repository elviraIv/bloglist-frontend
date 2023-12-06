const Blog = ({ blog, updateLikes, deleteBlog, username }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handleLike = () => {
    const blogToUpdate = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    };

    updateLikes(blog.id, blogToUpdate);
  };

  const handleDelete = () => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      deleteBlog(blog.id);
    }
  };

  return (
    <div>
      <div>
        <span>{blog.title}</span>
        <span>{blog.author}</span>
        <button onClick={toggleVisibility}>{visible ? "hide" : "show"}</button>
      </div>

      {visible && (
        <div>
          <div>{blog.url}</div>
          <div>
            Likes:{blog.likes}
            <button onClick={handleLike}>like</button>
          </div>
          <div>{blog.user.name}</div>
          {blog.user.username === username && (
            <button onClick={handleDelete}>delete</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
