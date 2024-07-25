import React from "react";
import "./About.css";
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaAngular, FaPython, FaJava, FaDatabase, FaJenkins, FaAws, FaFileDownload } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApachespark, SiCsharp } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { motion } from 'framer-motion';

const languages = [
  { icon: <FaHtml5 className="skill-icon" style={{ color: "#E34F26" }} />, name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} />, name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <FaSass className="skill-icon" style={{ color: "#CC6699" }} />, name: "SCSS", url: "https://sass-lang.com/" },
  { icon: <IoLogoJavascript className="skill-icon" style={{ color: "#F7DF1E" }} />, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <FaPython className="skill-icon" style={{ color: "#3776AB" }} />, name: "Python", url: "https://www.python.org/" },
  { icon: <FaJava className="skill-icon" style={{ color: "#007396" }} />, name: "Java", url: "https://www.oracle.com/java/" },
  { icon: <SiCsharp className="skill-icon" style={{ color: "#239120" }} />, name: "C#", url: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
  { icon: <FaDatabase className="skill-icon" style={{ color: "#F29111" }} />, name: "SQL", url: "https://www.w3schools.com/sql/" },
];

const frameworksTools = [
  { icon: <FaReact className="skill-icon" style={{ color: "#61DAFB" }} />, name: "React", url: "https://reactjs.org/" },
  { icon: <FaAngular className="skill-icon" style={{ color: "#DD0031" }} />, name: "Angular", url: "https://angular.io/" },
  { icon: <FaGitSquare className="skill-icon" style={{ color: "#F05032" }} />, name: "Git", url: "https://git-scm.com/" },
  { icon: <FaJenkins className="skill-icon" style={{ color: "#D24939" }} />, name: "Jenkins", url: "https://www.jenkins.io/" },
  { icon: <FaAws className="skill-icon" style={{ color: "#FF9900" }} />, name: "AWS", url: "https://aws.amazon.com/" },
  { icon: <SiApachespark className="skill-icon" style={{ color: "#E25A1C" }} />, name: "Spark", url: "https://spark.apache.org/" }
];

const SkillSection = ({ title, skills }) => (
  <div className="skill-category">
    <h3 className="skill-category-title">{title}</h3>
    <div className="skill-list">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="skill-item"
          onClick={() => window.open(skill.url, "_blank")}
          style={{ cursor: 'pointer' }}
        >
          <div className="skill-icon">{skill.icon}</div>
          <strong>{skill.name}</strong>
        </motion.div>
      ))}
    </div>
  </div>
);

function About() {
  const handleDownloadClick = () => {
    window.open('https://docs.google.com/document/d/e/2PACX-1vRtuKrW6Yf-wJ28YI0UXpuAZTRfAe4PX2ONw98HeLj2ZiYVV17hbG7GWY7MiHkK_YjlPc5M9EpZqGzR/pub', '_blank');
  };

  return (
    <section className="about-container section bg-dot-pattern">
      <div className="about-title-container">
        <h2 className="about-title">About Me</h2>
        <motion.button
          type="submit"
          className="form-button"
          whileHover={{ scale: 1.05 }}
          onClick={handleDownloadClick}
        >
        <span className="button-text">Download CV</span>
        <span className="button-icon">CV <FaFileDownload className="button-icon"/></span>
        </motion.button>
      </div>
      <strong className="experience-text">Professional Background</strong>
      <div className="description-text">
        I developed my knowledge on the fundamentals of software design & maintenance throughout my studies of <strong>Computer Science at Trinity College Dublin</strong>. I gained experience working as a <strong>full-stack web application developer</strong> at a promising startup, which allowed me to hone my proficiency in all facets of the software design lifecycle. I'm currently working as a <strong>P3 Software Engineer at Workday</strong>!
      </div>
      <strong className="experience-text">Personal Interests</strong>
      <div className="description-text">
        When I’m not at my computer I like to spend my time <strong>reading</strong>, <strong>playing football</strong>, <strong>hanging out with friends</strong>, and <strong>gaming</strong>. Take a look at some of my personal work in the <strong>Projects</strong> section. Check out my <strong>resume</strong> for more details on my background in software development.
      </div>
      <h2 className="title">Experience</h2>
      <strong className="experience-text">Software Developer at IRLCA, Dublin (2018 - 2022)</strong>
      <div className="description-text">
        At IRLCA, I honed my skills in full-stack development, utilizing <strong>Angular (HTML, CSS, TS)</strong> for the front end, <strong>C# with ASP.NET</strong> for the backend, and <strong>MSSQL</strong> for database management. This role introduced me to <strong>industry-standard practices</strong> with developing robust web applications and managing complex software projects.
      </div>
      <strong className="experience-text">P2 Software Engineer at Workday, Dublin (2022 - 2023)</strong>
      <div className="description-text">
        After graduating, I joined Workday as a <strong>P2 Software Engineer</strong>, where I leveraged my skills in <strong>big data analytics</strong> using <strong>Python and PySpark (Apache Spark)</strong> with <strong>cloud technologies (AWS Glue, Lambda & Redshift)</strong>. Over two years, I enhanced my expertise in handling large datasets and advanced my AWS skills.
      </div>
      <strong className="experience-text">P3 Software Engineer at Workday, Vancouver (2023 - 2024)</strong>
      <div className="description-text">
        My contributions led to a <strong>promotion to P3 Software Engineer</strong>, reflecting my ability to deliver impactful solutions and drive continuous improvement.
      </div>
      <h2 className="title">Skills & Proficiencies</h2>
      <div className="flex flex-row" style={{ width: '100%' }}>
        <div style={{ flex: 1 }}>
          <SkillSection title="Languages" skills={languages} />
        </div>
        <div style={{ flex: 1 }}>
          <SkillSection title="Frameworks & Tools" skills={frameworksTools} />
        </div>
      </div>
    </section>
  );
}

export default About;
