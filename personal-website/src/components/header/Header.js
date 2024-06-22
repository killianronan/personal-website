import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="name-role glow">
        <h2 className="title">Killian Ronan</h2>
        <p className="subtitle">Software Development</p>
      </div>
      <nav className="nav">
        <Link className={`link ${location.pathname === '/' ? 'active' : ''}`} to="/">
          <span className="nav-text">Home</span>
          <FaHome className="nav-icon" />
        </Link>
        <Link className={`link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
          <span className="nav-text">About</span>
          <FaUser className="nav-icon" />
        </Link>
        <Link className={`link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">
          <span className="nav-text">Projects</span>
          <FaProjectDiagram className="nav-icon" />
        </Link>
      </nav>
      <div className="name-role">
        <button className="resume-button" onClick={() => window.open("https://drive.google.com/file/d/1XGKmkF2tqkeZXGGggs1U_Z1eB9_8qTdB/view")}>Resume</button>
      </div>
    </header>
  );
}

export default Header;
