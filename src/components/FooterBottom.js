import React from "react";

import { Link } from "react-router-dom";

import "../styles/Footer.css";

function FooterBottom() {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div>
          <img src="logo.svg" className="logo" />
        </div>
        <div className="address">
          <p className="text-light">
            MARTHWAITE, SEDBERGH <br />
            CUMBRIA <br />
            +00 44 123 4567
          </p>
        </div>
        <div className="working-hours">
          <p className="text-light">
            Open Times <br />
            Mon - Fri: 09:00 AM - 10:00 PM <br />
            Sat - Sun: 09:00 AM - 11:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
