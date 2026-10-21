import "./Home.css";

export default function Home() {
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
    window.location.href = "/login";
  };

  return (
    <div className="app">
      
      {/* ===== NAVBAR (Login/Logout Buttons) ===== */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", background: "#1e293b", color: "white", alignItems: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#38bdf8" }}>Sri Nav Tech</div>
        
        <div>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              style={{ padding: "0.5rem 1rem", background: "#ef4444", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Logout
            </button>
          ) : (
            <a 
              href="/login" 
              style={{ padding: "0.5rem 1rem", background: "#38bdf8", color: "#0f172a", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
            >
              Login
            </a>
          )}
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <header className="hero">
        {isLoggedIn && (
          <div style={{ marginBottom: "1rem", color: "#38bdf8", fontSize: "1.2rem", fontWeight: "bold" }}>
            {getGreeting()}, {userName}! 👋
          </div>
        )}
        
        <h1>Sri Nav Tech Private Limited</h1>
        <p>Corporate Services Portfolio & Capability Statement</p>
        <p className="subtitle">Operational Launch: Gujarat, India</p>
      </header>

      {/* ===== INTRO SECTION ===== */}
      <section className="intro">
        <p>
          Welcome to Sri Nav Tech Private Limited. Established as a
          multi-disciplinary technology and engineering solutions provider in
          Gujarat, India, we offer an expansive suite of high-performance
          capabilities designed to accelerate digital transformation, optimize
          corporate infrastructure, and engineer precise functional products.
        </p>
        <p>
          Our expert teams bring together robust software frameworks,
          exhaustive quality assurance metrics, creative digital media
          standards, and structural engineering expertise to drive measurable
          value for your enterprise.
        </p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services">
        <h2>Core Service Offerings</h2>

        <div className="service-card">
          <h3>1. Software & Application Development</h3>
          <h4>Web Development</h4>
          <p>End-to-end engineering of highly secure, scalable, and responsive web platforms optimized for complex enterprise ecosystems and seamless cloud integrations.</p>
          <h4>Application Development</h4>
          <p>Design and deployment of native, hybrid, and cross-platform mobile and desktop applications tailored to deliver intuitive user interfaces and robust performance.</p>
        </div>

        <div className="service-card">
          <h3>2. Comprehensive Testing & Quality Assurance</h3>
          <h4>Web, Software, & Application Testing</h4>
          <p>Rigorous multi-tiered validation cycles spanning functional testing, regression testing, load testing, and security auditing across all software environments.</p>
          <h4>Accessibility Testing (WCAG Compliance)</h4>
          <p>Comprehensive digital accessibility evaluations ensuring your applications, platforms, and legal documentation strictly adhere to the latest Web Content Accessibility Guidelines (WCAG) criteria.</p>
        </div>

        <div className="service-card">
          <h3>3. Data Intelligence & Enterprise Infrastructure</h3>
          <h4>Data Analytics</h4>
          <p>Transforming raw organizational data into actionable strategic intelligence through advanced reporting models, predictive analytics, and clear visualization.</p>
          <h4>CRM Support Services</h4>
          <p>Seamless deployment, configuration, customization, and continuous operational support for major Customer Relationship Management platforms to align sales, marketing, and operations.</p>
          <h4>Telecommunication Services</h4>
          <p>Engineering and optimization of high-availability network frameworks, unified communication protocols, and tailored telecom systems infrastructure.</p>
        </div>

        <div className="service-card">
          <h3>4. Technical Content & Digital Media Solutions</h3>
          <h4>Documentation and Editing</h4>
          <p>Professional corporate blueprint writing, comprehensive system document compilation, user manuals, and detailed editing services for publishing-ready technical collateral.</p>
          <h4>Social Media Management (with Video & Audio Production)</h4>
          <p>Complete brand channel strategy execution, engagement monitoring, and multi-platform growth orchestration, backed by studio-grade, professional-tier video and audio editing.</p>
        </div>

        <div className="service-card">
          <h3>5. Engineering & Design Services</h3>
          <h4>Mechanical Design</h4>
          <p>High-precision geometric modeling, CAD drafting, component detailing, and computer-aided industrial product modeling adhering strictly to international engineering benchmarks.</p>
          <h4>Functionality Designing</h4>
          <p>Comprehensive structural analysis, ergonomic research, and usability engineering to seamlessly blend form with operational performance for hardware and digital solutions alike.</p>
        </div>
      </section>

      {/* ===== CUSTOM ENGINEERING SECTION ===== */}
      <section className="custom">
        <h2>Bespoke Solutions & Custom Engineering</h2>
        <p>At Sri Nav Tech Private Limited, we understand that unique business challenges require bespoke solutions. Beyond our listed capabilities, all services can be fully customized, scaled, or co-engineered to meet your precise technical requirements and business objectives. Speak with our consulting architects to draft an engagement framework customized to your timeline and scope.</p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <h3>Sri Nav Tech Private Limited</h3>
        <p>Corporate Headquarters & Service Operations Hub, Gujarat, India</p>
        <p className="tagline">Delivering Innovation, Building Excellence</p>
      </footer>
    </div>
  );
}