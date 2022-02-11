import React, { useState } from "react";
import Highlight from "react-highlight";
import "./theme.css";
import "./Aboutme.css";
import "./Lujain.css";
import lujainImg from "./image/IMG_1676-removebg.png";
import Lujain from "./Lujain";

function AboutMe(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
  }
  const sinppet = `import React from "react";

function Lujain() {
  const lujain = {
    name: "Lujain Alajmi",
    age: "born 1999 you do the math!",
    likes: "pizza 🍕, coffee ☕, my cat Yoyo 🐈 and Batman 🦇 ",
    skills: "frontend development: HTML, CSS, JavaScript and React",
  };
  return (
    <div>
      <h1>{lujain.name}</h1>
      <h3>{lujain.age}</h3>
      <h4>{lujain.likes}</h4>
      <h4>{lujain.skills}</h4>
    </div>
  );
}

export default Lujain;`;
  return (
    <div className="app__aboutme flex__center section__padding">
      <div className="app__aboutme-content flex__center">
        <div className="app__aboutme-right">
          {isClicked ? (
            <Lujain />
          ) : (
            <Highlight language="jsx">{sinppet}</Highlight>
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
