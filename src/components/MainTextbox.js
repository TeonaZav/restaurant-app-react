import React from "react";
import "../styles/MainTextbox.css";
function MainTextbox(props) {
  return (
    <div className={`text-box ${props.additional}`}>
      <img
        src="/images/patterns/pattern-divide.svg"
        alt="pattern"
        className={`pattern-divide ${props.patternAdditional}`}
      />
      <h2 className={`heading-secondary ${props.textColor}`}>
        {props.heading}
      </h2>
      <p className={`text ${props.textColor}`}>{props.text}</p>
    </div>
  );
}

export default MainTextbox;
