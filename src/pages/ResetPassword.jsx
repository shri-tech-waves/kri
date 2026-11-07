import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle"; // Import PageTitle for accessibility

export default function ResetPassword({ title }) { // Accept title prop from App.jsx
  const { id } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setStatus("Updating password...");

    try {
      const response = await fetch(`http://localhost:5000/api/reset-password/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus("Password updated successfully! ✅ Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setStatus(data.message || "Failed to update password. ❌");
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
      <h1>Reset Your Password</h1>
      <p>Enter your new password below.</p>
      
      <form onSubmit={handleReset} aria-busy={status === "Updating password..."} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="input-group">
          <label htmlFor="newPassword">New Password</label>
          <input 
            id="newPassword" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            placeholder="Enter new password" 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>
        
        <button 
          type="submit" 
          style={{ padding: "0.75rem", background: "#1e3a8a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
        >
          Update Password
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