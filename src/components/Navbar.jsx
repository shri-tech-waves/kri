import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName") || "User";

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#1e293b", color: "white", alignItems: "center", flexWrap: "wrap" }}>
      <div>
        <Link to="/" style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#38bdf8", textDecoration: "none" }}>
          Sri Nav Tech
        </Link>
        {isLoggedIn && (
          <span style={{ marginLeft: "1rem", fontSize: "0.9rem", color: "#cbd5e1" }}>
            {getGreeting()}, {userName}! 👋
          </span>
        )}
      </div>
      
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
        
        {isLoggedIn ? (
          <button onClick={handleLogout} style={{ padding: "0.4rem 1rem", background: "#ef4444", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ padding: "0.4rem 1rem", background: "#38bdf8", color: "#0f172a", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}