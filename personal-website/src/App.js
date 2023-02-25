import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <About />
        <Skills />
      </main>
      <footer className="footer">
        <p>&copy; 2023 Killian Ronan</p>
      </footer>
    </div>
  );
}

export default App;
