import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
        <Router>
        <div className="app-container">
          <Header/>
          <div className="main-container">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/skills" element={<Skills/>} />
              <Route exact path="/projects" element={<Projects/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;