import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact';
import { TracingBeam } from './components/tracingbeam/TracingBeam';
import Blog from './components/blog/Blog';  
import "@fontsource/league-spartan";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

const Portfolio = () => {
  return (
    <div className="app-container">
      <Header />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <TracingBeam className="px-10">
          <About />
        </TracingBeam>
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
        <Footer />
      </Section>
    </div>
  );
}

const Section = ({ id, children }) => {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
}

export default App;
