import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

//do preload
function Header() {
  return (
    <header className="header">
      <div className="name-role">
        {/* <div className="my-logo-image"></div> */}
        <h2 className="title">Killian Ronan</h2>
        <p className="subtitle">Software Development</p>
      </div>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/skills">Skills</Link>
        <Link className="link" to="/projects">Projects</Link>
      </nav>
      <div className="name-role">
        <button className="resumebtn" onClick={() => {window.open("https://drive.google.com/file/d/1XGKmkF2tqkeZXGGggs1U_Z1eB9_8qTdB/view");}}>Resume</button>
      </div>
    </header>
  );
}

export default Header;
