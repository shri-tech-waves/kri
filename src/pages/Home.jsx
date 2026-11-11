import PageTitle from "../components/PageTitle";
import "./Home.css"; // Keep this for the background

export default function Home({ title }) {
  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <PageTitle title={title} />
      
      {/* ===== HERO SECTION ===== */}
      <header style={{
        background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        color: "white",
        padding: "8rem 5%",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "1rem", letterSpacing: "-1px" }}>
          Sri Nav Tech Private Limited
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: "0.9", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
          Multi-disciplinary technology and engineering solutions provider. We accelerate digital transformation and optimize corporate infrastructure.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#services" style={{ padding: "0.8rem 2rem", background: "white", color: "#1e3a8a", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>
            Explore Services
          </a>
          <a href="/contact" style={{ padding: "0.8rem 2rem", background: "transparent", border: "2px solid white", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "bold", fontSize: "1.1rem" }}>
            Contact Us
          </a>
        </div>
      </header>

      {/* ===== INTRO SECTION ===== */}
      <section style={{ padding: "5rem 5%", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", color: "#1e293b", marginBottom: "1.5rem" }}>Welcome to Sri Nav Tech</h2>
        <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: "1.8", marginBottom: "1rem" }}>
          Established in Gujarat, India, we offer an expansive suite of high-performance capabilities designed to engineer precise functional products.
        </p>
        <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: "1.8" }}>
          Our expert teams bring together robust software frameworks, exhaustive quality assurance metrics, and structural engineering expertise to drive measurable value for your enterprise.
        </p>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" style={{ padding: "5rem 5%", background: "#f8fafc" }}>
        <h2 style={{ fontSize: "2.5rem", color: "#1e293b", textAlign: "center", marginBottom: "3rem" }}>Core Service Offerings</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Service Card 1 */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", borderTop: "4px solid #3b82f6" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#1e293b", marginBottom: "1rem" }}>1. Software Development</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>End-to-end engineering of highly secure, scalable web platforms and native/cross-platform mobile applications.</p>
          </div>

          {/* Service Card 2 */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", borderTop: "4px solid #10b981" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#1e293b", marginBottom: "1rem" }}>2. Quality Assurance</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>Rigorous multi-tiered validation cycles, security auditing, and comprehensive WCAG digital accessibility evaluations.</p>
          </div>

          {/* Service Card 3 */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", borderTop: "4px solid #8b5cf6" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#1e293b", marginBottom: "1rem" }}>3. Data & Infrastructure</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>Transforming raw data into strategic intelligence, CRM support services, and telecommunication network optimization.</p>
          </div>
          
          {/* Service Card 4 */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", borderTop: "4px solid #f59e0b" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#1e293b", marginBottom: "1rem" }}>4. Digital Media Solutions</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>Professional corporate documentation, technical editing, and complete social media management with video production.</p>
          </div>

          {/* Service Card 5 */}
          <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", borderTop: "4px solid #ef4444" }}>
            <h3 style={{ fontSize: "1.3rem", color: "#1e293b", marginBottom: "1rem" }}>5. Engineering & Design</h3>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: "1.6" }}>High-precision CAD modeling, mechanical design, structural analysis, and ergonomic usability engineering.</p>
          </div>

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#0f172a", color: "#94a3b8", padding: "3rem 5%", textAlign: "center" }}>
        <h3 style={{ color: "white", marginBottom: "0.5rem", fontSize: "1.2rem" }}>Sri Nav Tech Private Limited</h3>
        <p style={{ marginBottom: "1rem" }}>Corporate Headquarters & Service Operations Hub, Gujarat, India</p>
        <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "#3b82f6" }}>Delivering Innovation, Building Excellence</p>
      </footer>
    </div>
  );
}