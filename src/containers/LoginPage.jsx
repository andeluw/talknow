import { useState } from "react";
import { setItemSessionStorage } from "../lib/storage";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setItemSessionStorage("username", username);
    window.location.reload();
  }

  return (
    <div className="login-container">
      <h3 className="logo">tn.</h3>
      <h2 className="login-title">Log in</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={username.trim().length === 0}>
          Login
        </button>
      </form>
    </div>
  );
}
