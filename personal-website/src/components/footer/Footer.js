import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-content">
        &copy; {new Date().getFullYear()} Killian Ronan
      </p>
    </footer>
  );
}

export default Footer;