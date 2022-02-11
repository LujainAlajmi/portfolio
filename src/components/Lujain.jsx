import React from "react";
import "./Lujain.css";

function Lujain() {
  const lujain = {
    name: "Lujain Alajmi",
    age: "born 1999 you do the math!",
    likes: "pizza 🍕, coffee ☕, my cat Yoyo 🐈 and Batman 🦇 ",
    skills: "frontend development: HTML, CSS, JavaScript and React",
  };
  return (
    <div>
      <h1 className="textColor">{lujain.name}</h1>
      <h3 className="textColor">{lujain.age}</h3>
      <h4 className="textColor">{lujain.likes}</h4>
      <h4 className="textColor">{lujain.skills}</h4>
    </div>
  );
}

export default Lujain;
