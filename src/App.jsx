import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { LocalImpact } from "./components/LocalImpact";
import { PolicyAnalysis } from "./components/PolicyAnalysis";
import { Comments } from "./components/Comments";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

// Smooth scroll
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Hero data={landingPageData.Hero} />
      <LocalImpact data={landingPageData.LocalImpact} />
      <PolicyAnalysis data={landingPageData.PolicyAnalysis} />
      <Comments data={landingPageData.Comments} />
    </div>
  );
};

export default App;




