import PageTitle from "../components/PageTitle";

export default function Downloads({ title }) {
  return (
    <div style={{ maxWidth: "800px", margin: "4rem auto", padding: "2rem", fontFamily: "'Segoe UI', sans-serif" }}>
      
      <PageTitle title={title} />
      
      {/* Main Heading */}
      <h1 style={{ fontSize: "2.5rem", color: "#1e293b", marginBottom: "1rem", textAlign: "center" }}>
        Downloads & Resources
      </h1>
      <p style={{ textAlign: "center", color: "#64748b", marginBottom: "3rem" }}>
        Access our corporate portfolio, service catalogs, and technical documents.
      </p>

      {/* Download Card */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "1.5rem 2rem", 
        background: "#f8fafc", 
        border: "1px solid #e2e8f0", 
        borderRadius: "12px",
        marginBottom: "1.5rem"
      }}>
        <div>
          <h3 style={{ fontSize: "1.2rem", color: "#1e3a8a", margin: "0 0 0.5rem 0" }}>Sri Nav Tech Services Portfolio</h3>
          <p style={{ margin: 0, color: "#475569", fontSize: "0.9rem" }}>A comprehensive PDF outlining our core service offerings and capabilities.</p>
        </div>
        <a 
          href="/downloads/services.pdf" 
          download
          style={{ 
            padding: "0.75rem 1.5rem", 
            background: "#2563eb", 
            color: "white", 
            textDecoration: "none", 
            borderRadius: "8px", 
            fontWeight: "600",
            display: "inline-block"
          }}
        >
          Download PDF
        </a>
      </div>

      {/* Placeholder for Future Downloads */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "1.5rem 2rem", 
        background: "#f8fafc", 
        border: "1px dashed #cbd5e1", 
        borderRadius: "12px",
        opacity: 0.7
      }}>
        <div>
          <h3 style={{ fontSize: "1.2rem", color: "#64748b", margin: "0 0 0.5rem 0" }}>Mobile Application (Coming Soon)</h3>
          <p style={{ margin: 0, color: "#94a3b8", fontSize: "0.9rem" }}>Our official Android application is currently in development.</p>
        </div>
        <span style={{ padding: "0.75rem 1.5rem", background: "#e2e8f0", color: "#94a3b8", borderRadius: "8px", fontWeight: "600" }}>
          Coming Soon
        </span>
      </div>

    </div>
  );
}