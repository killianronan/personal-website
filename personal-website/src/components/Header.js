import React from "react";
import "./../App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title">John Doe</h1>
      <p className="subtitle">Software Developer</p>
      <nav className="nav">
        <a className="link" href="#Home">Home</a>
        <a className="link" href="#Projects">Projects</a>
        <a className="link" href="#About">About</a>
        <a className="link" href="#Contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
