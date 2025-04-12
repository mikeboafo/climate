import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../cl2.ico";

export const Navigation = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const textColor =
    scrollDirection === "down" || (scrollDirection === "up" && !isAtTop)
      ? "#000"
      : "#fff";

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav
      style={{
        height: "100px",
        transition: "all 0.3s ease",
        backgroundColor:
          scrollDirection === "down" || (scrollDirection === "up" && !isAtTop)
            ? "rgba(255, 255, 255, 0.95)"
            : "transparent",
        backdropFilter:
          scrollDirection === "down" || (scrollDirection === "up" && !isAtTop)
            ? "blur(12px)"
            : "none",
        boxShadow:
          scrollDirection === "down" || (scrollDirection === "up" && !isAtTop)
            ? "0 2px 10px rgba(0, 0, 0, 0.1)"
            : "none",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
      }}
    >
      {/* Left: Logo */}
      <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
        <a href="#page-top" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Climate Africa Logo"
            style={{
              height: "210px",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>
      </div>

      {/* Right: Menu Icon */}
      <div style={{ flex: "1", textAlign: "right" }}>
        <div
          onClick={toggleDropdown}
          style={{
            cursor: "pointer",
            color: textColor,
            fontSize: "30px",
            display: "inline-block",
          }}
        >
          {dropdownOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          style={{
            position: "absolute",
            top: "100px",
            right: "20px",
            backgroundColor:
              scrollDirection === "down" || (scrollDirection === "up" && !isAtTop)
                ? "rgba(255,255,255,0.97)"
                : "rgba(0,0,0,0.9)",
            padding: "20px 30px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 999,
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { id: "Cultural", label: "Cultural" },
              { id: "Environmental", label: "Environmental" },
              { id: "Local", label: "Local" },
              { id: "Policy", label: "Policy" },
              { id: "Research", label: "Research" },
              { id: "Technology", label: "Technology" },
            ].map((item) => (
              <li key={item.id} style={{ margin: "16px 0" }}>
                <a
                  href={`#${item.id}`}
                  style={{
                    fontWeight: "bold",
                    color: textColor,
                    textDecoration: "none",
                    fontSize: "16px",
                  }}
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
















