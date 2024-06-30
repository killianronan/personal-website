import React, { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import "./Header.css";
import { MdContactMail } from "react-icons/md";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-spy]");
      const scrollPosition = window.innerHeight / 2 + window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const activeSection = section.getAttribute("id");
          setActiveLink(activeSection);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link
          className={`link ${activeLink === "home" ? "active" : ""}`}
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => handleSetActive("home")}
          data-spy
        >
          <FaHome className="nav-icon" />
          <span className="nav-text">Home</span>
        </Link>
        <Link
          className={`link ${activeLink === "about" ? "active" : ""}`}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => handleSetActive("about")}
          data-spy
        >
          <FaUser className="nav-icon" />
          <span className="nav-text">About</span>
        </Link>
        <Link
          className={`link ${activeLink === "projects" ? "active" : ""}`}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => handleSetActive("projects")}
          data-spy
        >
          <FaProjectDiagram className="nav-icon" />
          <span className="nav-text">Projects</span>
        </Link>
        <Link
          className={`link ${activeLink === "contact" ? "active" : ""}`}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => handleSetActive("contact")}
          data-spy
        >
          <MdContactMail className="nav-icon" />
          <span className="nav-text">Contact</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
