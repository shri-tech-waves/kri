import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      {/* Hidden Announcer: NVDA isko padhega jab page change hoga */}
      <div 
        id="page-announcer" 
        aria-live="polite" 
        style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
      </div>

      <Routes>
        {/* Har page par title prop pass karein */}
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/login" element={<Login title="Login" />} />
        <Route path="/signup" element={<Signup title="Sign Up" />} />
        <Route path="/contact" element={<Contact title="Contact Us" />} />
        <Route path="/forgot-password" element={<ForgotPassword title="Forgot Password" />} />
        <Route path="/reset-password/:id" element={<ResetPassword title="Reset Password" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;