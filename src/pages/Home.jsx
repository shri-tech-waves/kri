import "./Home.css";

export default function Home() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Sri Nav Tech Private Limited</h1>
        <p>Corporate Services Portfolio & Capability Statement</p>
        <p className="subtitle">Operational Launch: Gujarat, India</p>
      </header>

      <section className="intro">
        <p>
          Welcome to Sri Nav Tech Private Limited. Established as a
          multi-disciplinary technology and engineering solutions provider in
          Gujarat, India, we offer an expansive suite of high-performance
          capabilities designed to accelerate digital transformation, optimize
          corporate infrastructure, and engineer precise functional products.
        </p>
      </section>

      <section className="services">
        <h2>Core Service Offerings</h2>
        
        <div className="service-card">
          <h3>1. Software & Application Development</h3>
          <h4>Web Development</h4>
          <p>End-to-end engineering of highly secure, scalable, and responsive web platforms...</p>
          <h4>Application Development</h4>
          <p>Design and deployment of native, hybrid, and cross-platform mobile and desktop applications...</p>
        </div>

        <div className="service-card">
          <h3>2. Comprehensive Testing & Quality Assurance</h3>
          <h4>Web, Software, & Application Testing</h4>
          <p>Rigorous multi-tiered validation cycles spanning functional testing, regression testing...</p>
        </div>
        
        {/* Aap baaki services bhi aise hi add kar sakte ho */}
      </section>

      <section className="custom">
        <h2>Bespoke Solutions & Custom Engineering</h2>
        <p>
          At Sri Nav Tech Private Limited, we understand that unique business
          challenges require bespoke solutions...
        </p>
      </section>

      <footer className="footer">
        <h3>Sri Nav Tech Private Limited</h3>
        <p>Corporate Headquarters & Service Operations Hub, Gujarat, India</p>
        <p className="tagline">Delivering Innovation, Building Excellence</p>
      </footer>
    </div>
  );
}