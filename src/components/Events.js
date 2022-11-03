import React from "react";
import { useState } from "react";
import "../styles/Events.css";
import MainTextbox from "./MainTextbox";
function Events() {
  const images = [
    {
      name: "Family Gathering",
      img: "/images/homepage/family-gathering-desktop@2x.jpg",
      text:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    },
    {
      name: "Special Events",
      img: "/images/homepage/special-events-desktop@2x.jpg",
      text:
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    },
    {
      name: "Social Events",
      img: "/images/homepage/social-events-desktop@2x.jpg",
      text:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    },
  ];
  const [selected, setSelected] = useState(images[0]);
  return (
    <div className="events">
      <img
        src={
          process.env.PUBLIC_URL +
          "/images/patterns/pattern-curve-top-right.svg"
        }
        alt="pattern"
        className="pattern-1"
      />
      <div className="event-img-ct">
        <img
          src={process.env.PUBLIC_URL + selected.img}
          alt=""
          className="selected"
        />
      </div>

      <div className="event-text-box">
        <MainTextbox
          heading={selected.name}
          text={selected.text}
          patternAdditional="pattern-hidden"
        />
        <button className="btn btn-full mb-medium">BOOK A TABLE</button>
        <div className="events-btn-ct">
          {images.map((item, index) => {
            return (
              <div key={index}>
                <ul className="events-list">
                  <li>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/patterns/pattern-divide.svg"
                      }
                      alt=""
                    />

                    <p
                      onClick={() => setSelected(item)}
                      onMouseOver={() => setSelected(item)}
                    >
                      {item.name}
                    </p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
