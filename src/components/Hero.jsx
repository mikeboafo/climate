import React from "react";
import "../Hero.css"; // ✅ Import the CSS file

export const Hero = (props) => {
  return (
    <header className="hero-header">
      {/* Overlay with blurred background */}
      <div className="hero-background-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Support the Legacy Project</h1>

          <p className="hero-subtitle">
            Every year, the Old Girls of Wesley Girls’ High School (WGHS) give back to their Alma Mater and the Kakumdo community.
          </p>

          {/* Added space between the two paragraphs */}
          <p className="hero-subtitle">
            In 2026, the Class of 2004 will continue this legacy by supporting the school’s growth. Please join us, through your donation(s), in honouring our Alma Mater and making a lasting difference as we complete and furnish the first floor of our Resource Centre - ‘The Legacy Project’.
          </p>

          {/* What is About Section */}
         
        </div>
      </div>
    </header>
  );
};











