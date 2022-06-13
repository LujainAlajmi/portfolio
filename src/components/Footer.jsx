import React from "react";
import "./Footer.css";
function Footer() {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <div>
      <footer>
        {" "}
        <p>made with awesomeness 🤘 {getYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;
