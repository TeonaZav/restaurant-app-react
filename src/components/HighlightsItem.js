import React from "react";
function HighlightsItem(props) {
  return (
    <div className="item">
      <div className="hilights-item-ct">
        <div className="image-wrap">
          <img
            src={process.env.PUBLIC_URL + props.image}
            alt="menu-item-img"
            className="menu-item-img"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/patterns/pattern-divide.svg"}
            alt="pattern"
            className="item-pattern"
          />
        </div>

        <div className="item-text-box">
          <h3 className="heading-tertiary t-white"> {props.heading}</h3>
          <p className="text-small">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default HighlightsItem;
