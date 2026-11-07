import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle({ title }) {
  const location = useLocation();

  useEffect(() => {
    // Browser tab ka title change karein
    document.title = `${title} - Sri Nav Tech`;
    
    // Screen reader ko live announce karne ke liye (optional but helpful)
    const announceTitle = () => {
      const announcer = document.getElementById("page-announcer");
      if (announcer) {
        announcer.textContent = `${title} page loaded`;
      }
    };
    
    // Thoda delay taaki DOM update ho jaye
    setTimeout(announceTitle, 100);

  }, [location.pathname, title]); // Jab bhi URL ya title change ho, ye chalega

  return null; // Ye screen par kuch nahi dikhata
}