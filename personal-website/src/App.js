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
      <TracingBeam className="px-6">
        <Section id="about">
          <About />
        </Section>
      </TracingBeam>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="Contact">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

const Section = ({ id, children }) => {
  if (id !== 'projects') {
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
  else {
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
}

export default App;
