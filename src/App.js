import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
