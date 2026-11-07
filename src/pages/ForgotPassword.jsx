import { useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle"; // Import PageTitle for accessibility

export default function ForgotPassword({ title }) { // Accept title prop from App.jsx
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setStatus("Sending reset link...");

    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus("Reset link has been sent to your email! ✅");
      } else {
        setStatus(data.message || "Failed to send email. ❌");
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
      <h1>Forgot Password</h1>
      <p>Enter your registered email to receive a reset link.</p>
      
      <form onSubmit={handleReset} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="input-group">
          <label htmlFor="resetEmail">Email</label>
          <input 
            id="resetEmail" 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            placeholder="Enter your registered email" 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>
        
        <button 
          type="submit" 
          style={{ padding: "0.75rem", background: "#1e3a8a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
        >
          Send Reset Link
        </button>
      </form>

      {/* Live region for screen reader announcements */}
      <div aria-live="polite" style={{ marginTop: "1rem", color: status.includes("✅") ? "green" : "red", fontWeight: "bold" }}>
        {status}
      </div>
      
      <p style={{ marginTop: "1rem" }}><Link to="/login">Back to Login</Link></p>
    </div>
  );
}