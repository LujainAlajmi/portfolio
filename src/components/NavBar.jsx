import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import "./Navbar.css";
function NavBar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <header>
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <h1>&#60;Lujain &#47;&#62;</h1>
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="https://www.linkedin.com/in/lujain-alajmi-1625271b0/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/LujainAlajmi">GitHub</a>
          </li>
          <li>
            <a href="mailto:lujainmalajmi@gmail.com?subject=would like to work with you!&">
              ContactMe
            </a>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#a9aac6"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <ImCancelCircle
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/lujain-alajmi-1625271b0/"
                    onClick={() => setToggleMenu(false)}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/LujainAlajmi"
                    onClick={() => setToggleMenu(false)}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lujainmalajmi@gmail.com?subject=would like to work with you!&"
                    onClick={() => setToggleMenu(false)}
                  >
                    ContactMe
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
