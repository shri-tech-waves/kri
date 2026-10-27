import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", data.userName);
        navigate("/");
      } else {
        setStatus(data.message || "Invalid credentials! ❌");
      }
    } catch (error) {
      setStatus("Server is offline. ❌");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sri Nav Tech</h2>
        <p>Admin Login</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="loginEmail">Email</label>
            <input id="loginEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="loginPassword">Password</label>
            <input id="loginPassword" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" />
          </div>
          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <Link to="/forgot-password" style={{ fontSize: "0.85rem", color: "#1e3a8a", textDecoration: "underline" }}>Forgot Password?</Link>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div aria-live="polite" style={{ marginTop: "1rem", color: "red", fontWeight: "bold" }}>{status}</div>
        <p style={{ marginTop: "1rem" }}>New here? <Link to="/signup">Create an account</Link></p>
      </div>
    </div>
  );
}