import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle"; // Import PageTitle for accessibility

export default function Signup({ title }) { // Accept title prop from App.jsx
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setStatus("Creating account...");

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus("Account created! Please login. ✅");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setStatus(data.message || "Failed to create account. ❌");
      }
    } catch (error) {
      setStatus("Server is offline. ❌");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "10px" }}>
      
      {/* Page Title for Screen Reader */}
      <PageTitle title={title} />
      
      {/* Changed h2 to h1 for main heading accessibility */}
      <h1>Create an Account</h1>
      
      <form onSubmit={handleSignup} aria-busy={status === "Creating account..."} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        
        <div className="input-group">
          <label htmlFor="signupName" style={{ display: "block", marginBottom: "0.25rem" }}>Full Name</label>
          <input 
            id="signupName"
            type="text" 
            placeholder="Enter your full name" 
            required 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="signupEmail" style={{ display: "block", marginBottom: "0.25rem" }}>Email Address</label>
          <input 
            id="signupEmail"
            type="email" 
            placeholder="Enter your email" 
            required 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="signupPassword" style={{ display: "block", marginBottom: "0.25rem" }}>Password</label>
          <input 
            id="signupPassword"
            type="password" 
            placeholder="Create a password" 
            required 
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>

        <button 
          type="submit" 
          style={{ padding: "0.75rem", background: "#1e3a8a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", marginTop: "0.5rem" }}
        >
          Sign Up
        </button>
      </form>

      {/* Live region for screen reader announcements */}
      <div aria-live="polite" style={{ marginTop: "1rem", color: status.includes("✅") ? "green" : "red", fontWeight: "bold" }}>
        {status}
      </div>
      
      <p style={{ marginTop: "1rem" }}>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}