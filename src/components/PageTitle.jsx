import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle({ title }) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update the browser tab title for visual users
    document.title = `${title} - Sri Nav Tech`;
    
    // 2. Announce the page title for screen reader users
    const announceTitle = () => {
      const announcer = document.getElementById("page-announcer");
      if (announcer) {
        announcer.textContent = `${title} page loaded`;
      }
    };
    
    // Add a slight delay to ensure the DOM has updated before announcing
    setTimeout(announceTitle, 100);

  }, [location.pathname, title]); // Re-run effect whenever the route or title changes

  return null; // This component does not render anything visually
}