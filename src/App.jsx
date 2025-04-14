import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { LocalImpact } from "./components/LocalImpact";
import { PolicyAnalysis } from "./components/PolicyAnalysis";
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
      <Navigation className="mb-400"/>
      <LocalImpact data={landingPageData.LocalImpact} />
      <PolicyAnalysis data={landingPageData.PolicyAnalysis} />
      
    
    </div>
  );
};

export default App;




