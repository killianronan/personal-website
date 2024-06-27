import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header className="header">
      <div className="name-role glow">
        <h2 className="name">Killian Ronan</h2>
        <p className="subtitle">Software Engineer</p>
      </div>
      <nav className="nav">
        <Link
          className={`link ${activeLink === "home" ? "active" : ""}`}
          to="home"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("home")}
        >
          <span className="nav-text">Home</span>
          <FaHome className="nav-icon" />
        </Link>
        <Link
          className={`link ${activeLink === "about" ? "active" : ""}`}
          to="about"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("about")}
        >
          <span className="nav-text">About</span>
          <FaUser className="nav-icon" />
        </Link>
        <Link
          className={`link ${activeLink === "projects" ? "active" : ""}`}
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("projects")}
        >
          <span className="nav-text">Projects</span>
          <FaProjectDiagram className="nav-icon" />
        </Link>
      </nav>
      <div className="name-role">
        <button
          className="resume-button"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1XGKmkF2tqkeZXGGggs1U_Z1eB9_8qTdB/view"
            )
          }
        >
          Resume
        </button>
      </div>
    </header>
  );
}

export default Header;
