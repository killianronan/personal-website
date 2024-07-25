import React from 'react';
import { motion } from 'framer-motion';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import { TracingBeam } from './components/tracingbeam/TracingBeam';
import Contact from './components/contact/Contact';

const App = () => {
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
