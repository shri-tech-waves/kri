import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "User";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "1rem 5%", 
      background: "#ffffff", 
      color: "#1e293b", 
      alignItems: "center", 
      flexWrap: "wrap",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ fontWeight: "800", fontSize: "1.5rem", color: "#2563eb", textDecoration: "none", letterSpacing: "-0.5px" }}>
          Sri Nav Tech
        </Link>
        {isLoggedIn && (
          <span style={{ marginLeft: "1rem", fontSize: "0.9rem", color: "#64748b", background: "#f1f5f9", padding: "0.25rem 0.75rem", borderRadius: "20px" }}>
            Hi, {userName}
          </span>
        )}
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", fontWeight: "500", fontSize: "0.95rem" }}>
        <Link to="/" style={{ color: "#475569", textDecoration: "none" }}>Home</Link>
        <Link to="/contact" style={{ color: "#475569", textDecoration: "none" }}>Contact Us</Link>
        
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            style={{ padding: "0.5rem 1.2rem", background: "#fef2f2", color: "#ef4444", border: "1px solid #fecaca", borderRadius: "6px", cursor: "pointer", fontWeight: "600" }}
          >
            Logout
          </button>
        ) : (
          <Link 
            to="/login" 
            style={{ padding: "0.5rem 1.2rem", background: "#2563eb", color: "white", textDecoration: "none", borderRadius: "6px", fontWeight: "600", boxShadow: "0 2px 4px rgba(37,99,235,0.2)" }}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}