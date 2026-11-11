import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle"; 
import "./Login.css";

export default function Login({ title }) { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      // Updated URL for Render backend
      const response = await fetch("https://sri-nav-tech-backend.onrender.com/api/login", {
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
      <PageTitle title={title} />
      <div className="login-box">
        <h1>Sri Nav Tech Login</h1>
        <p>Admin Login</p>

        <form onSubmit={handleLogin} aria-busy={status === "Logging in..."}>
          <div className="input-group">
            <label htmlFor="loginEmail">Email</label>
            <input 
              id="loginEmail" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email" 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="loginPassword">Password</label>
            <input 
              id="loginPassword" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password" 
            />
          </div>
          
          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <Link to="/forgot-password" style={{ fontSize: "0.85rem", color: "#1e3a8a", textDecoration: "underline" }}>
              Forgot Password?
            </Link>
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div aria-live="polite" style={{ marginTop: "1rem", color: "red", fontWeight: "bold" }}>
          {status}
        </div>
        
        <p style={{ marginTop: "1rem" }}>
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
}