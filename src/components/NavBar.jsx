import React from "react";
import "./Navbar.css";
function NavBar() {
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h1>lujain</h1>
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="https://www.linkedin.com/in/lujain-alajmi-1625271b0/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#github">GitHub</a>
          </li>
          <li>
            <a href="#mail">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
