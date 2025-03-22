import Post from "./Post";

export default function PostList({
  posts,
  handleEdit,
  handleDelete,
  currentUser,
  handleLike,
  handleUnlike,
}) {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index}>
            <Post
              post={post}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              currentUser={currentUser}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
            />
            {index !== posts.length - 1 && <div className="post-divider" />}
          </div>
        ))
      ) : (
        <div className="no-posts">
          <p>
            No
            {currentUser ? " posts" : " posts to display"}
          </p>
        </div>
      )}
    </div>
  );
}
