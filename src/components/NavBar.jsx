import React from "react";
import "./Navbar.css";
function NavBar() {
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h1>&#60;Lujain &#47;&#62;</h1>
        </div>
        <ul className="app__navbar-links">
          <p>
            import <span>&#123;</span>
          </p>
          <li>
            <a href="https://www.linkedin.com/in/lujain-alajmi-1625271b0/">
              LinkedIn
            </a>
            ,
          </li>
          <li>
            <a href="https://github.com/LujainAlajmi">GitHub</a>,
          </li>
          <li>
            <a href="mailto:lujainmalajmi@gmail.com?subject=would like to work with you!&">
              ContactMe
            </a>
          </li>
          <p>
            <span>&#125;</span> from <span className="quotes">"./socials"</span>
          </p>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
