"use strict";

import { useState, useEffect } from "react";
import "../App.css";
import {
  getItemLocalStorage,
  getItemSessionStorage,
  removeItemSessionStorage,
  setItemLocalStorage,
} from "../lib/storage";
import { LogIn } from "lucide-react";
import LoginPage from "./LoginPage";
import { LogOut } from "lucide-react";
import { dummyPosts } from "../lib/helper";
import PostList from "../components/PostList";
import AddPostModal from "../components/AddPostModal";

function generatePostId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
}

export default function Home() {
  const [posts, setPosts] = useState(dummyPosts);
  const [loginPage, setLoginPage] = useState(false);
  const [activeTab, setActiveTab] = useState("For You");
  const [username, setUsername] = useState(null);

  const navItems = ["For You", "Your Posts", "Saved"];

  function handleLogout(e) {
    e.preventDefault();
    removeItemSessionStorage("username");
    setLoginPage(false);
    setUsername(null);
  }

  useEffect(() => {
    const localUser = getItemSessionStorage("username");
    setUsername(localUser);

    const localPosts = getItemLocalStorage("posts");
    localPosts ? setPosts(localPosts) : setPosts(dummyPosts);
  }, []);

  function addPost(content) {
    if (!content) return;

    const newPost = {
      id: generatePostId(),
      username,
      content,
      createdAt: new Date().toISOString(),
      likes: [],
      saves: [],
    };

    setPosts([newPost, ...posts]);
    setItemLocalStorage("posts", [newPost, ...posts]);
  }

  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  function editPost(newContent, id) {
    if (!newContent || !id) return;

    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, content: newContent } : post
    );

    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  function handleLike(id) {
    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: [...post.likes, username] } : post
    );

    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  function handleUnlike(id) {
    const newPosts = posts.map((post) =>
      post.id === id
        ? { ...post, likes: post.likes.filter((user) => user !== username) }
        : post
    );

    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  function handleSave(id) {
    const newPosts = posts.map((post) =>
      post.id === id ? { ...post, saves: [...post.saves, username] } : post
    );

    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  function handleUnsave(id) {
    const newPosts = posts.map((post) =>
      post.id === id
        ? { ...post, saves: post.saves.filter((user) => user !== username) }
        : post
    );

    setPosts(newPosts);
    setItemLocalStorage("posts", newPosts);
  }

  if (loginPage) {
    return <LoginPage />;
  }

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-header">
          <div style={{ width: "100px", height: "2px" }} />
          <h3 className="logo">tn.</h3>
          {username ? (
            <button onClick={handleLogout} className="auth-button">
              Log out
              <LogOut size={24} className="auth-icon" />
            </button>
          ) : (
            <button
              onClick={() => setLoginPage(true)}
              className="auth-button login-button">
              Log in
              <LogIn size={24} className="auth-icon" />
            </button>
          )}
        </div>

        <div className="home-posts">
          <ul className="home-navlist">
            {username ? (
              navItems.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`home-navitem ${
                    activeTab === item ? "activenav" : ""
                  }`}>
                  {item}
                </li>
              ))
            ) : (
              <li
                key="For You"
                onClick={() => setActiveTab("For You")}
                className={`home-navitem activenav`}>
                Home
              </li>
            )}
          </ul>

          {username ? (
            <div className="post-cta">
              <div className="post-input">
                <img
                  src="/user.png"
                  alt="Profile"
                  className="profile-picture"
                />
                <AddPostModal
                  triggerText={"What's on your mind?"}
                  triggerClassName={"addinput-home"}
                  action={addPost}
                />
              </div>
              <AddPostModal
                triggerText={"Post"}
                triggerClassName={"outline-button"}
                action={addPost}
              />
            </div>
          ) : (
            <div style={{ width: "100%", height: "1rem" }} />
          )}

          {activeTab === "Your Posts" && (
            <PostList
              posts={posts.filter((post) => post.username === username)}
              handleEdit={editPost}
              handleDelete={deletePost}
              currentUser={username}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
              handleSave={handleSave}
              handleUnsave={handleUnsave}
            />
          )}

          {activeTab === "For You" && (
            <PostList
              posts={posts}
              handleEdit={editPost}
              handleDelete={deletePost}
              currentUser={username}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
              handleSave={handleSave}
              handleUnsave={handleUnsave}
            />
          )}

          {activeTab === "Saved" && (
            <PostList
              posts={posts.filter((post) => post.saves.includes(username))}
              handleEdit={editPost}
              handleDelete={deletePost}
              currentUser={username}
              handleLike={handleLike}
              handleUnlike={handleUnlike}
              handleSave={handleSave}
              handleUnsave={handleUnsave}
            />
          )}
        </div>
      </div>
    </div>
  );
}
