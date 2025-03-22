import Post from "./Post";

export default function PostList({
  posts,
  handleEdit,
  handleDelete,
  currentUser,
}) {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <div key={index}>
          <Post
            post={post}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
          {index !== posts.length - 1 && <div className="post-divider" />}
        </div>
      ))}
    </div>
  );
}
