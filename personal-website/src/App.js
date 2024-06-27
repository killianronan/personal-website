import React from 'react';
import { motion } from 'framer-motion';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import "./App.css";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import 'bootstrap/dist/css/bootstrap.min.css';
import {TracingBeam} from './components/tracingbeam/TracingBeam';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main-container">
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
      </main>
      <Footer />
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
