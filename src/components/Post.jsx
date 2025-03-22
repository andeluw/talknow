import { useState } from "react";
import { EllipsisVertical } from "lucide-react";
import "../App.css";
import EditPostModal from "./EditPostModal";
import DeletePostModal from "./DeletePostModal";
import AddPostModal from "./AddPostModal";

export default function Post({ post, handleEdit, handleDelete, currentUser }) {
  const [showOptions, setShowOptions] = useState(false);

  function calcTime(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}m`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d`;
  }

  return (
    <div className="post">
      <img src="/user.png" alt="Profile" className="profile-picture" />
      <div className="post-ctr">
        <div className="post-text">
          <div className="post-header">
            <h6>@{post.username} </h6>
            <span className="time">{calcTime(post.createdAt)}</span>
          </div>
          <p className="post-content">{post.content}</p>
        </div>

        {currentUser === post.username ? (
          <div
            className="post-moreicon-container"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}>
            <EllipsisVertical size={24} className="post-moreicon" />

            {showOptions && (
              <div className="post-options">
                <EditPostModal
                  triggerText="Edit"
                  triggerClassName="option-btn"
                  action={handleEdit}
                  inputValue={post.content}
                  editedPostId={post.id}
                />

                <DeletePostModal handleDelete={() => handleDelete(post.id)} />
              </div>
            )}
          </div>
        ) : (
          <div style={{ width: "20px", height: "100%" }} />
        )}
      </div>
    </div>
  );
}
