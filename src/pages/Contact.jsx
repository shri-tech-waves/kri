import { useState } from "react";
import PageTitle from "../components/PageTitle"; // Import PageTitle for accessibility

export default function Contact({ title }) { // Accept title prop from App.jsx
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your details have been sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      } else {
        setStatus("Failed to send message. ❌");
      }
    } catch (error) {
      setStatus("Server is offline. ❌");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto", padding: "2rem", background: "#f8fafc", borderRadius: "10px" }}>
      
      {/* Page Title for Screen Reader */}
      <PageTitle title={title} /> 
      
      {/* Main Heading for Accessibility */}
      <h1>Contact Us</h1>
      <p>Have a question? Send us a message!</p>

      <form 
        onSubmit={handleSubmit} 
        aria-busy={status === "Sending..."} 
        style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}
      >
        {/* Added htmlFor and id to inputs for better screen reader support */}
        <div>
          <label htmlFor="contactName" style={{ display: "block", marginBottom: "0.25rem" }}>Your Name</label>
          <input 
            id="contactName"
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>

        <div>
          <label htmlFor="contactEmail" style={{ display: "block", marginBottom: "0.25rem" }}>Your Email</label>
          <input 
            id="contactEmail"
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} 
          />
        </div>

        <div>
          <label htmlFor="contactMessage" style={{ display: "block", marginBottom: "0.25rem" }}>Your Message</label>
          <textarea 
            id="contactMessage"
            name="message" 
            placeholder="Type your message here" 
            required 
            rows="5" 
            value={formData.message} 
            onChange={handleChange} 
            style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          style={{ padding: "0.75rem", background: "#1e3a8a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
        >
          Send Message
        </button>
      </form>

      {/* Live region to announce success/error message to screen readers */}
      <div 
        aria-live="polite" 
        style={{ marginTop: "1rem", fontWeight: "bold", color: status.includes("✅") ? "green" : "red" }}
      >
        {status}
      </div>
    </div>
  );
}