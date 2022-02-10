import React, { useState } from "react";
import "./Aboutme.css";
import lujainImg from "./image/IMG_1676-removebg.png";
import Lujain from "./Lujain";

function AboutMe(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }

  return (
    <div className="app__aboutme flex__center section__padding" id="about">
      <div className="app__aboutme-content flex__center">
        <div className="app__aboutme-right">
          {isClicked ? (
            <Lujain />
          ) : (
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
          )}
          <button onClick={handleClick}>Get to know me!</button>
        </div>

        <div className="app__aboutme-left">
          <img src={lujainImg} alt="Lujain" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
