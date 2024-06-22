import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="name-role glow">
        <h2 className="title">Killian Ronan</h2>
        <p className="subtitle">Software Development</p>
      </div>
      <nav className="nav">
        <Link className="link" to="/">
          <span className="nav-text">Home</span>
          <FaHome className="nav-icon" />
        </Link>
        <Link className="link" to="/about">
          <span className="nav-text">About</span>
          <FaUser className="nav-icon" />
        </Link>
        <Link className="link" to="/projects">
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
