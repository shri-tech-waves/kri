import { useState } from "react";

export default function Contact() {
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. ❌");
      }
    } catch (error) {
      setStatus("Server is offline. ❌");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "3rem auto", padding: "2rem", background: "#f8fafc", borderRadius: "10px" }}>
      <h2>Contact Us</h2>
      <p>Have a question? Send us a message!</p>

      <form onSubmit={handleSubmit} aria-busy={status === "Sending..."} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }} />
        <textarea name="message" placeholder="Your Message" required rows="5" value={formData.message} onChange={handleChange} style={{ padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc" }}></textarea>
        
        <button type="submit" style={{ padding: "0.75rem", background: "#1e3a8a", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>Send Message</button>
      </form>

      <div aria-live="polite" style={{ marginTop: "1rem", fontWeight: "bold", color: status.includes("✅") ? "green" : "red" }}>
        {status}
      </div>
    </div>
  );
}