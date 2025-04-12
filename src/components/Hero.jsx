import React from "react";
import backgroundVideo from "../vid2.mp4";
import "../Hero.css"; // ✅ Import the CSS file

export const Hero = (props) => {
  return (
    <header className="hero-header">
      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Climate Africa</h1>
          <p className="hero-subtitle">
            {props.data && props.data.paragraph}
          </p>

          {/* What is About Section */}
          <div className="about-section">
            <h2>Who are we?</h2>
            <p>
              Climate Africa Newspaper is a dedicated publication focused on
              climate change and environmental sustainability across the African
              continent. As the climate crisis grows increasingly urgent, our
              mission is to inform, engage, and empower readers — from policymakers
              and businesses to grassroots activists and the general public.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};









