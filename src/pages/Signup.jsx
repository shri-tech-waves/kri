import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="Name" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ padding: "0.5rem" }} />
        <input type="email" placeholder="Email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ padding: "0.5rem" }} />
        <input type="password" placeholder="Password" required onChange={(e) => setFormData({ ...formData, password: e.target.value })} style={{ padding: "0.5rem" }} />
        <button type="submit" style={{ padding: "0.5rem", background: "#1e3a8a", color: "white" }}>Sign Up</button>
      </form>
      <div aria-live="polite" style={{ marginTop: "1rem", color: status.includes("✅") ? "green" : "red" }}>{status}</div>
      <p style={{ marginTop: "1rem" }}>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}