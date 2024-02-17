import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
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
              <Route exact path="/projects" element={<Projects/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;