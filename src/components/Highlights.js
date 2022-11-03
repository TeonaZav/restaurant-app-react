import React from "react";
import "../styles/Highlights.css";
import HighlightsItem from "./HighlightsItem";
import MainTextbox from "./MainTextbox";

import "../styles/Highlights.css";
function Highlights() {
  return (
    <div className="hilights-ct">
      <MainTextbox
        heading="A few highlights from our menu"
        text="We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season."
        additional=""
        textColor="t-white"
      />
      <div>
        <HighlightsItem
          image={"/images/homepage/salmon-desktop-tablet.jpg"}
          heading={"Seared Salmon Fillet"}
          text={
            "Our locally sourced salmon served with a refreshing buckwheat summer salad."
          }
        />
        <HighlightsItem
          image={"/images/homepage/beef-desktop-tablet.jpg"}
          heading={"Rosemary Filet Mignon"}
          text={
            "Our prime beef served to your taste with a delicious choice of seasonal sides."
          }
        />
        <HighlightsItem
          image={"/images/homepage/chocolate-desktop-tablet.jpg"}
          heading={"Summer Fruit Chocolate Mousse"}
          text={
            "Creamy mousse combined with summer fruits and dark chocolate shavings."
          }
        />
      </div>
    </div>
  );
}

export default Highlights;
