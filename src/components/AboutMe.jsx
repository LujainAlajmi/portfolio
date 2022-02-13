import React, { useState } from "react";
import "./Aboutme.css";
import lujainImg2 from "./image/lujainPic.png";
import Lujain from "./Lujain";
import CodeSnippet from "./CodeSnippet";

function AboutMe(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }

  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        {isClicked ? <Lujain /> : <CodeSnippet />}
        <button className="custom__button" onClick={handleClick}>
          Get to know me!
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={lujainImg2} alt="Lujain" />
      </div>
    </div>
  );
}

export default AboutMe;
